// Rebuilds the site photos in public/images/property from the originals kept in .assets-src.
// The old courtyard photo is intentionally not processed: that building was demolished (owner, 2026-11-02).
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const out = path.join(__dirname, '..', 'public', 'images', 'property');

const jobs = [
  // Google Maps listing photos (originals gitignored in .assets-src/property)
  ...['bathroom-shower', 'bathroom-vanity', 'bedroom-double', 'garden-frontage', 'guest-lounge'].map((n) => [path.join(__dirname, 'property', `${n}.jpg`), n]),
  // Owner photos of the current building (2026-11-02)
  ...Object.entries({ 5: 'room-gold-curtains', 6: 'room-desk-tv', 7: 'room-double-bed', 8: 'room-entrance-view', 9: 'hallway', 10: 'ironing-station' }).map(
    ([n, name]) => [path.join(__dirname, 'owner-2026-11', `${n}.jpg`), name],
  ),
];

(async () => {
  for (const [src, name] of jobs) {
    if (!fs.existsSync(src)) {
      console.log('skip (original not on this machine):', name);
      continue;
    }
    await sharp(src).rotate().resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(out, `${name}.jpg`));
  }
  for (const f of fs.readdirSync(out).filter((f) => f.endsWith('.jpg'))) {
    const m = await sharp(path.join(out, f)).metadata();
    console.log(f, `${m.width}x${m.height}`, `${(fs.statSync(path.join(out, f)).size / 1024) | 0}KB`);
  }
})();
