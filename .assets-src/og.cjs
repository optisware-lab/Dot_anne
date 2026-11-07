// Rebuilds public/images/og.jpg (1200x630 share card): the left brand panel of the current card,
// with the location line rewritten, and the lodge front photo on the right.
const sharp = require('sharp');
const path = require('path');
const pub = path.join(__dirname, '..', 'public', 'images');
const line = 'Golf Estate &amp; Rasta Village, Tema';
(async () => {
  sharp.cache(false);
  const og = path.join(pub, 'og.jpg');
  const src = require('fs').readFileSync(og);
  const left = await sharp(src).extract({ left: 0, top: 0, width: 560, height: 630 }).toBuffer();

  const text = Buffer.from(`<svg width="560" height="40" xmlns="http://www.w3.org/2000/svg">
    <rect width="560" height="40" fill="#ffffff"/>
    <text x="280" y="28" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22.5" fill="#4b5d73">${line}</text></svg>`);
  const right = await sharp(path.join(pub, 'property', 'lodge-front.jpg')).resize(640, 630, { fit: 'cover', position: 'centre' }).toBuffer();
  const out = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#ffffff' } })
    .composite([{ input: left, left: 0, top: 0 }, { input: text, left: 0, top: 392 }, { input: right, left: 560, top: 0 }])
    .jpeg({ quality: 84, mozjpeg: true })
    .toBuffer();
  require('fs').writeFileSync(og, out);
  console.log('og.jpg rebuilt');
})();
