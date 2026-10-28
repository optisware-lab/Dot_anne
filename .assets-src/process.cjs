const sharp = require('sharp'); const path = require('path');
const src = path.join(__dirname, 'property'), out = path.join(__dirname, '..', 'public', 'images', 'property');
(async () => {
  // blur the visible licence plate on the parked car
  const ext = path.join(src, 'exterior-courtyard.jpg');
  const r = { left: 1560, top: 885, width: 130, height: 70 };
  const patch = await sharp(ext).extract(r).blur(14).toBuffer();
  await sharp(ext).composite([{ input: patch, left: r.left, top: r.top }]).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(out, 'exterior-courtyard.jpg'));
  await sharp(ext).composite([{ input: patch, left: r.left, top: r.top }]).extract({left:1380,top:820,width:400,height:200}).toFile(path.join(__dirname,'plate-check.png'));
  for (const f of ['bathroom-shower.jpg','bathroom-vanity.jpg','bedroom-double.jpg','garden-frontage.jpg','guest-lounge.jpg']) {
    await sharp(path.join(src, f)).rotate().resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(out, f));
  }
  for (const f of require('fs').readdirSync(out)) { const m = await sharp(path.join(out,f)).metadata(); console.log(f, m.width+'x'+m.height, (require('fs').statSync(path.join(out,f)).size/1024|0)+'KB'); }
})();
