// --- DATA CATALOG ---
const PORTFOLIO_ITEMS = [
  {
    id: 'look-1',
    title: 'Royal Champagne Soft Glam Bridal',
    category: 'bridal',
    categoryLabel: 'Bridal & Akad',
    packageKey: 'bridal',
    image: "img/foto-1.jpg",
    desc: 'Tampilan pengantin modern dengan kilau satin champagne, riasan mata soft-smokey hangat, dan ronce melati anggrek segar yang anggun.',
    products: 'Dior Forever Skin Glow, Natasha Denona I Need A Nude Palette, Charlotte Tilbury Pillow Talk',
    finish: 'Satin Dewy Lock (Tahan 18 Jam)'
  },
  {
    id: 'look-2',
    title: 'Paes Ageng & Solo Putri Tradisional',
    category: 'bridal',
    categoryLabel: 'Bridal Adat Jawa',
    packageKey: 'bridal',
    image: "img/foto-3.jpg",
    desc: 'Pakem rias pengantin Jawa Solo Putri dengan pidih presisi, cunduk mentul emas, serta complexion halus yang tahan sorot lampu pelaminan.',
    products: 'NARS Light Reflecting Foundation, Shu Uemura Hard Formula Brow, Hourglass Ambient Lighting',
    finish: 'Velvet Flawless Matte (Tahan 18 Jam)'
  },
  {
    id: 'look-3',
    title: 'Korean Peach Glass Skin Wisuda',
    category: 'wisuda',
    categoryLabel: 'Wisuda & Lamaran',
    packageKey: 'graduation',
    image: "img/foto-4.jpg",
    desc: 'Riasan segar bernuansa peach-coral dengan efek glass skin sehat, alis serat natural, dan ombre glossy lips yang cocok untuk wisuda pagi.',
    products: 'Laneige Glowy Makeup Serum, Rare Beauty Soft Pinch Liquid Blush, Rom&nd Juicy Lasting Tint',
    finish: 'Fresh Radiant Dewy (Tahan 12 Jam)'
  },
  {
    id: 'look-4',
    title: 'Hollywood Red Carpet Evening Glam',
    category: 'glam',
    categoryLabel: 'Party & Gala',
    packageKey: 'party',
    image: "img/foto-5.jpg",
    desc: 'Tampilan glamor tegas dengan bronzer terstruktur, shimmer gold di kelopak mata, dan pulasan bibir velvet berry-red yang memukau.',
    products: 'Estée Lauder Double Wear, Pat McGrath Labs Mothership, MAC Locked Kiss Ink Ruby',
    finish: 'High-Definition Sculpted Matte (Tahan 14 Jam)'
  },
  {
    id: 'look-5',
    title: 'Intimate Rose-Gold Engagement Look',
    category: 'wisuda',
    categoryLabel: 'Lamaran & Sangjit',
    packageKey: 'engagement',
    image: "img/foto-1.jpg",
    desc: 'Nuansa dusty rose romantis yang lembut di kamera close-up pertunangan maupun prosesi tukar cincin bersama keluarga besar.',
    products: 'Cle de Peau Radiant Fluid Foundation, Laura Mercier Roseglow Caviar Stick, YSL Candy Glaze',
    finish: 'Soft-Focus Natural Glow (Tahan 14 Jam)'
  },
  {
    id: 'look-6',
    title: 'Bronze Goddess Editorial Photoshoot',
    category: 'glam',
    categoryLabel: 'Editorial & Prewedding',
    packageKey: 'party',
    image: "img/foto-5.jpg",
    desc: 'Dirancang khusus untuk sesi pemotretan prewedding indoor maupun outdoor dengan teknik contouring presisi tinggi.',
    products: 'Giorgio Armani Luminous Silk, Makeup By Mario SoftSculpt, Fenty Beauty Gloss Bomb',
    finish: 'Flash-Proof Studio HD (Tahan 12 Jam)'
  }
];

const PACKAGES_DATA = [
  {
    key: 'bridal',
    name: 'Royal Bridal Full-Day',
    price: 4500000,
    badge: 'Paling Populer',
    duration: 'Akad + Resepsi (Standby)',
    features: [
      'Makeup Akad & Touch-up Retouch Resepsi',
      'Hairdo / Hijab Styling Modern & Adat',
      'Free 1x Test Makeup di Studio',
      'Free Softlens Premium & Fake Nails Custom',
      'Termasuk Rias Ibu Pengantin (2 Orang)'
    ]
  },
  {
    key: 'engagement',
    name: 'Intimate Engagement',
    price: 1650000,
    badge: 'Best Value',
    duration: 'Durasi Rias 90 Menit',
    features: [
      'Complexion HD Anti-Crack Tahan 14 Jam',
      'Hairdo Modern Sanggul / Hijab Styling',
      'Bulu Mata Artisan 3D Nyaman Tanpa Ganjal',
      'Free Softlens Normal/Minus Pilihan Warna',
      'Home Service ke Lokasi Acara'
    ]
  },
  {
    key: 'graduation',
    name: 'Flawless Wisuda / Prom',
    price: 850000,
    badge: 'Favorit Mahasiswi',
    duration: 'Mulai Jam 04.00 Pagi',
    features: [
      'Korean Glass Skin / Soft Matte Look',
      'Sudah Termasuk Hairdo / Hijab Do Wisuda',
      'Tahan Keringat dari Pagi hingga Sore',
      'Touch-up Kit Mini (Lip Gloss & Blotting Paper)',
      'Diskon Grup jika Booking ≥ 3 Orang'
    ]
  },
  {
    key: 'party',
    name: 'Party & Bridesmaid Glam',
    price: 750000,
    badge: 'fleksibel',
    duration: 'Durasi Rias 60 Menit',
    features: [
      'Pilihan Soft Glam atau Bold Red Carpet',
      'Sudah Termasuk Hairdo Simple / Hijab Styling',
      'Kosmetik High-End Aman untuk Kulit Sensitif',
      'Bulu Mata Human Hair Natural / Glam',
      'Cocok untuk Gala Dinner, Maternity & Prewed'
    ]
  }
];