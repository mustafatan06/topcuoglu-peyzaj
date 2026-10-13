"""
Wix sitenizdeki resimleri 'images' klasörüne indirir.
Kullanım:  python download_images.py
Sadece Python 3 gerekir (ek kütüphane yok).
"""
import os
import urllib.request

BASE = "https://static.wixstatic.com/media/"

IMAGES = {
    "hero.png":              "e732c3_279f4faae6c74608904719ce171df364~mv2.png",
    "garden.jpg":            "e732c3_731b20f714ff410187119a1643a12e27~mv2.jpg",
    "bahce-bakimi.jpg":      "e732c3_a1c5698b0a2f474197eedea810b6a818~mv2.jpg",
    "peyzaj-duzenleme.jpg":  "e732c3_b9363eaa18bf44f8a60b3c1824550eeb~mv2.jpg",
    "ilaclama.jpg":          "e732c3_c40e0bc3c11a4a6f8e9ebb22204913f1~mv2.jpg",
    "kanalizasyon.jpg":      "e732c3_5c6b92f1c0774227b575be67b43c77d1~mv2.jpg",
    "mikrobiyal-gubre.jpg":  "e732c3_052f263475344430b65b088405524540~mv2.jpg",
    "agac-budama.jpg":       "e732c3_f6f4b0be30f84dd6bc7ce32fc466d843~mv2.jpg",
    "cati-oluk.jpg":         "e732c3_70f10703814e4a0db47125ade9de792c~mv2.jpg",
    "ofis-temizligi.jpg":    "e732c3_ef5a344edf2145be944c15ef897888ad~mv2.jpg",
}

out_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "images")
os.makedirs(out_dir, exist_ok=True)

for local_name, remote in IMAGES.items():
    url = BASE + remote.replace("~", "%7E")
    target = os.path.join(out_dir, local_name)
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r, open(target, "wb") as f:
            f.write(r.read())
        print("OK     ", local_name)
    except Exception as e:
        print("HATA   ", local_name, "-", e)

print("\nBitti. Resimler 'images' klasöründe.")
