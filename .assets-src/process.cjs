// Rebuilds the site photos in public/images/property from the originals kept in .assets-src.
// The old courtyard photo is intentionally not processed: that building was demolished (owner, 2026-11-02).
// The guest lounge, flower beds and private bathroom photos were taken off the site at the owner's request (2026-11-07).
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const out = path.join(__dirname, '..', 'public', 'images', 'property');

const jobs = [
  // Google Maps listing photos (originals gitignored in .assets-src/property)
  ...['bathroom-vanity', 'bedroom-double'].map((n) => [path.join(__dirname, 'property', `${n}.jpg`), n]),
  // Owner photos of the current building (2026-11-02)
  ...Object.entries({ 5: 'room-gold-curtains', 6: 'room-desk-tv', 7: 'room-double-bed', 8: 'room-entrance-view', 9: 'hallway', 10: 'ironing-station' }).map(
    ([n, name]) => [path.join(__dirname, 'owner-2026-11', `${n}.jpg`), name],
  ),
  // Owner photos (2026-11-07). Originals are gitignored: the parking original shows a car number plate.
  ...Object.entries({ exterior: 'lodge-front', reception: 'reception', 'tv-fridge': 'room-tv-fridge', parking: 'parking', 'wall-art': 'wall-art' }).map(
    ([n, name]) => [path.join(__dirname, 'owner-2026-11-07', `${n}.png`), name],
  ),
];

// Blur the parked car's number plate (left, top, width, height in the original's pixels).
const blurs = { parking: [80, 333, 90, 46] };

async function load(src, name) {
  const img = sharp(src).rotate();
  if (!blurs[name]) return img;
  const [left, top, width, height] = blurs[name];
  const patch = await sharp(src).extract({ left, top, width, height }).blur(9).toBuffer();
  return sharp(await img.composite([{ input: patch, left, top }]).toBuffer());
}

(async () => {
  for (const [src, name] of jobs) {
    if (!fs.existsSync(src)) {
      console.log('skip (original not on this machine):', name);
      continue;
    }
    await (await load(src, name)).resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(out, `${name}.jpg`));
  }
  for (const f of fs.readdirSync(out).filter((f) => f.endsWith('.jpg'))) {
    const m = await sharp(path.join(out, f)).metadata();
    console.log(f, `${m.width}x${m.height}`, `${(fs.statSync(path.join(out, f)).size / 1024) | 0}KB`);
  }
})();
