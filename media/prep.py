# Web versions of (a) chosen Flow scene illustrations and (b) Active Air's own photos (light correction + crops only).
import os, json, sys
from PIL import Image, ImageOps, ImageEnhance, ImageFilter
HERE = os.path.dirname(os.path.abspath(__file__))
FLOW = os.path.join(HERE, 'flow'); OWN = os.path.join(HERE, '..', 'inventory', 'images')
OUT = os.path.join(HERE, '..', 'site', 'public', 'img', 'm'); os.makedirs(OUT, exist_ok=True)
# Flow picks: site id -> file in flow/ (Nano Banana Pro, 1376x768 / 768x1376 / 1024x1024 natives)
SCENES = {
 'h1-colonial': '36-ar1.79.jpg', 'h1-colonial-p': '34-ar0.56.jpg',
 'h2-winter': '32-ar1.79.jpg', 'h2-winter-p': '30-ar0.56.jpg',
 'h3-living': '28-ar1.79.jpg', 'h3-living-p': '26-ar0.56.jpg',
 'furnace': '25-ar1.79.jpg', 'boiler': '22-ar1.79.jpg', 'minisplit-bed': '20-ar1.79.jpg',
 'waterheater': '19-ar1.79.jpg', 'repair': '17-ar1.79.jpg', 'kitchen': '14-ar1.00.jpg',
 'thermostat': '12-ar1.00.jpg', 'street': '10-ar1.00.jpg', 'baseboard': '09-ar1.00.jpg',
 'cta-evening': '06-ar1.79.jpg', 'about-street': '04-ar1.79.jpg', 'heatpump-snow': '02-ar1.79.jpg',
 'equipment': '00-ar1.79.jpg',
 'hero-home': 'h5-a-w1.jpg', 'hero-home-p': 'h5-a-p2.jpg', 'hero-porch': 'h5-b-w2.jpg', 'hero-porch-p': 'h5-b-p1.jpg',
 'repair-p': 'p-repair.jpg', 'furnace-p': 'p-furnace.jpg', 'boiler-p': 'p-boiler.jpg', 'heatpump-snow-p': 'p-heatpump-snow.jpg', 'waterheater-p': 'p-waterheater.jpg', 'equipment-p': 'p-equipment.jpg',
 'cta-evening-p': 'p-cta-evening.jpg', 'about-street-p': 'p-about-street.jpg', 'minisplit-bed-p': 'p-minisplit-bed.jpg', 'desk-p': 'p-desk.jpg', 'ac-p': 'p-ac.jpg', 'maintenance-p': 'p-maintenance.jpg',
 'desk': 'b2-00.jpg', 'ac': 'b2-03.jpg', 'maintenance': 'b2-05.jpg', 'heatpump': 'b2-07.jpg',
}
# Own photos: id -> (source, crop box or None)
OWNJ = {
 'own-ductless-living': ('home-13-ig-ductless-living-room.jpg', (0, 135, 1440, 945)),
 'own-ductless-living-p': ('home-13-ig-ductless-living-room.jpg', (520, 0, 1127, 1080)),
 'own-multizone': ('home-23-ig-ductless-multizone-exterior.jpg', (0, 100, 1440, 910)),
 'own-multizone-sq': ('home-23-ig-ductless-multizone-exterior.jpg', (230, 0, 1310, 1080)),
 'own-multizone-p': ('home-23-ig-ductless-multizone-exterior.jpg', (430, 0, 1037, 1080)),
 'own-tech-hero': ('home-03-tech-servicing-furnace-repair-tile.jpg', (0, 640, 1179, 1303)),
 'own-tech-hero-p': ('home-03-tech-servicing-furnace-repair-tile.jpg', (0, 0, 891, 1584)),
 'own-wiring-hero': ('home-02-tech-wiring-air-handler-maintenance-tile.jpg', (0, 120, 1057, 715)),
 'own-wiring-hero-p': ('home-02-tech-wiring-air-handler-maintenance-tile.jpg', (514, 0, 1057, 966)),
 'own-tech-furnace': ('home-03-tech-servicing-furnace-repair-tile.jpg', (0, 300, 1179, 1584)),
 'own-tech-furnace-card': ('home-03-tech-servicing-furnace-repair-tile.jpg', (0, 190, 1179, 1551)),
 'own-tech-wiring': ('home-02-tech-wiring-air-handler-maintenance-tile.jpg', None),
 'own-trane-team': ('about-02-trane-supply-customer-solutions-team.jpg', None),
 'own-owner': ('about-01-owner-andrew-dejesus-portrait.jpg', (300, 130, 880, 1010)),
 'own-tech-condenser': ('online-payments-05-tech-servicing-condenser.png', None),
 'own-hat-innovair': ('home-31-ig-innovair-mini-split-hat.jpg', (0, 300, 1179, 1774)),
 'own-ladder': ('home-21-ig-tech-ladder-three-condensers.jpg', None),
 'own-bryant-trumbull': ('home-09-bryant-condenser-install-trumbull.jpg', None),
 'own-crane': ('home-17-ig-mitsubishi-crane-lift.jpg', None),
 'own-airhandler-shelton': ('hvac-gallery-02-shelton-bryant-air-handler.png', None),
 'own-condenser-fairfield': ('hvac-gallery-03-fairfield-bryant-condenser.png', None),
 'own-condenser-monroe': ('hvac-gallery-04-monroe-bryant-condenser.png', None),
}
BLUR = {'home-23-ig-ductless-multizone-exterior.jpg': [(1150, 600, 1196, 780)]}
def save(sid, im, light=False):
    W, H = im.size; widths = []
    targets = sorted({w for w in (640, 1280) if w < W} | {W})
    if W < 700: targets = sorted({W, min(W * 2, 1000)})  # small originals: one 2x Lanczos copy, lightly sharpened
    for w in targets:
        h = round(H * w / W); r = im.resize((w, h), Image.LANCZOS)
        if w > W: r = r.filter(ImageFilter.UnsharpMask(radius=1.2, percent=40, threshold=2))
        r.save(f'{OUT}/{sid}-{w}.avif', quality=58, speed=4); r.save(f'{OUT}/{sid}-{w}.webp', quality=80, method=6); widths.append(w)
    return {'w': W, 'h': H, 'widths': widths}
man = {}
only = set(sys.argv[1:])
for sid, f in SCENES.items():
    if only and sid not in only: continue
    p = os.path.join(FLOW, f)
    if not os.path.exists(p): print('missing', sid, f); continue
    man[sid] = {**save(sid, Image.open(p).convert('RGB')), 'kind': 'illustration', 'source': 'Google Flow, Nano Banana Pro', 'file': f}
for sid, (src, box) in OWNJ.items():
    if only and sid not in only: continue
    im = Image.open(os.path.join(OWN, src)).convert('RGB')
    for bb in BLUR.get(src, []):  # privacy: blur house numbers etc. before cropping
        pad = 14; ob = (bb[0] - pad, bb[1] - pad, bb[2] + pad, bb[3] + pad)
        reg = im.crop(ob).filter(ImageFilter.GaussianBlur(7))
        mask = Image.new('L', reg.size, 0); mask.paste(255, (pad, pad, reg.width - pad, reg.height - pad)); mask = mask.filter(ImageFilter.GaussianBlur(6))
        im.paste(reg, ob, mask)
    if box: im = im.crop(box)
    im = ImageOps.autocontrast(im, cutoff=0.4); im = ImageEnhance.Color(im).enhance(1.04)
    man[sid] = {**save(sid, im), 'kind': 'own', 'source': src, 'crop': box}
mp = os.path.join(OUT, 'manifest.json'); old = json.load(open(mp)) if os.path.exists(mp) else {}
old.update(man); json.dump(old, open(mp, 'w'), indent=1)
print(len(man), 'done')
