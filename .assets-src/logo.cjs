// Builds the website logo assets from the owner's logo (2026-11-02).
// Input:  .assets-src/logo/original.png      (full-resolution logo photographed on a wall)
//         .assets-src/logo/cutout-small.png  (same logo with the wall removed, low resolution)
// Output: public/images/logo/*.png and src/app/icon.png, apple-icon.png
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, 'logo');
const out = path.join(__dirname, '..', 'public', 'images', 'logo');
const app = path.join(__dirname, '..', 'src', 'app');
fs.mkdirSync(out, { recursive: true });

(async () => {
  const orig = sharp(path.join(dir, 'original.png'));
  const { width: W, height: H } = await orig.metadata();

  // 1. High-resolution cut-out: the original's pixels with the small cut-out's alpha, scaled up.
  const alpha = await sharp(path.join(dir, 'cutout-small.png'))
    .ensureAlpha()
    .extractChannel(3)
    .resize(W, H, { kernel: 'lanczos3' })
    .linear(1.15, -10) // firm up the edge so no wall haze survives
    .raw()
    .toBuffer();
  const rgb = await sharp(path.join(dir, 'original.png')).removeAlpha().raw().toBuffer();
  const rgba = Buffer.alloc(W * H * 4);
  for (let i = 0; i < W * H; i++) {
    rgba[i * 4] = rgb[i * 3];
    rgba[i * 4 + 1] = rgb[i * 3 + 1];
    rgba[i * 4 + 2] = rgb[i * 3 + 2];
    rgba[i * 4 + 3] = alpha[i];
  }
  const full = await sharp(rgba, { raw: { width: W, height: H, channels: 4 } }).png().toBuffer();

  // 2. Find the four parts of the logo by scanning rows that contain ink.
  const { data, info } = await sharp(full).extractChannel(3).raw().toBuffer({ resolveWithObject: true });
  const rowInk = [];
  for (let y = 0; y < info.height; y++) {
    let n = 0;
    for (let x = 0; x < info.width; x++) if (data[y * info.width + x] > 128) n++;
    rowInk.push(n);
  }
  const bands = [];
  let start = -1;
  for (let y = 0; y < rowInk.length; y++) {
    const ink = rowInk[y] > 2;
    if (ink && start < 0) start = y;
    if ((!ink || y === rowInk.length - 1) && start >= 0) {
      if (y - start > 8) bands.push([start, y]);
      start = -1;
    }
  }
  console.log('bands (top, bottom):', JSON.stringify(bands));

  const bbox = async (buf) => {
    const t = await sharp(buf).trim({ threshold: 1 }).toBuffer({ resolveWithObject: true });
    return t;
  };
  const crop = async (top, bottom) => (await bbox(await sharp(full).extract({ left: 0, top, width: W, height: bottom - top }).png().toBuffer())).data;

  // Expected: [top lotus + leaves], [DOT ANNE], [HOME LODGE + gold rules], [bottom lotus]
  if (bands.length < 4) throw new Error('could not find the four parts of the logo');
  const lotus = await crop(bands[0][0], bands[0][1]);
  const word = await crop(bands[1][0], bands[2][1]); // DOT ANNE + HOME LODGE together
  const all = (await bbox(full)).data;

  // Full logo (footer, schema, share card)
  await sharp(all).resize({ width: 1000 }).png({ compressionLevel: 9 }).toFile(path.join(out, 'logo-full.png'));
  // Lotus mark alone
  await sharp(lotus).resize({ width: 600 }).png({ compressionLevel: 9 }).toFile(path.join(out, 'logo-mark.png'));

  // Horizontal lockup for the header: lotus mark beside the wordmark, both trimmed
  const H2 = 240; // render height; shown at ~48px
  const wordImg = await sharp(word).resize({ height: H2 }).toBuffer({ resolveWithObject: true });
  const markImg = await sharp(lotus).resize({ height: Math.round(H2 * 0.82) }).toBuffer({ resolveWithObject: true });
  const gap = Math.round(H2 * 0.14);
  const lockW = markImg.info.width + gap + wordImg.info.width;
  await sharp({ create: { width: lockW, height: H2, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: markImg.data, left: 0, top: Math.round((H2 - markImg.info.height) / 2) },
      { input: wordImg.data, left: markImg.info.width + gap, top: 0 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(path.join(out, 'logo-lockup.png'));

  // App icons: lotus on white, padded
  const icon = async (size, file, radius) => {
    const mark = await sharp(lotus).resize({ width: Math.round(size * 0.78), height: Math.round(size * 0.66), fit: 'inside' }).toBuffer({ resolveWithObject: true });
    const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="#ffffff"/></svg>`);
    await sharp(bg)
      .composite([{ input: mark.data, left: Math.round((size - mark.info.width) / 2), top: Math.round((size - mark.info.height) / 2) }])
      .png()
      .toFile(file);
  };
  await icon(512, path.join(app, 'icon.png'), 96);
  await icon(180, path.join(app, 'apple-icon.png'), 0);

  for (const f of fs.readdirSync(out)) {
    const m = await sharp(path.join(out, f)).metadata();
    console.log(f, `${m.width}x${m.height}`, `${(fs.statSync(path.join(out, f)).size / 1024) | 0}KB`);
  }
})();
