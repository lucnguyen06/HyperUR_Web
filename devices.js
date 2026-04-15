// Device list - Android 14+ supported devices only (Snapdragon only)
const devices = [
  // Mi 10 Series
  { name: 'Mi 10S', codeName: 'THYME' },
  { name: 'Mi 10T 5G / 10T Pro 5G / Redmi K30S', codeName: 'APOLLO' },
  { name: 'Xiaomi Mi 10 Ultra', codeName: 'CAS' },
  { name: 'Mi 10 Pro 5G', codeName: 'CMI' },
  { name: 'Mi 10 5G', codeName: 'UMI' },
  { name: 'Redmi K40S / POCO F4', codeName: 'MUNCH' },
  { name: 'Redmi K40 Pro / K40 Pro+ / POCO F3 Pro / Mi 11i', codeName: 'HAYDN' },
  { name: 'Redmi K40 / POCO F3 / Mi 11X', codeName: 'ALIOTH' },

  // Xiaomi 11 Series
  { name: 'Xiaomi 11', codeName: 'VENUS' },
  { name: 'Xiaomi 11 Pro', codeName: 'STAR' },
  { name: 'Xiaomi 11 Ultra', codeName: 'STAR' },
  { name: 'Xiaomi 11T Pro', codeName: 'VILI' },
  { name: 'Xiaomi 11 Lite 5G NE', codeName: 'LISA' },

  // Xiaomi 12 Series
  { name: 'Xiaomi 12', codeName: 'CUPID' },
  { name: 'Xiaomi 12 Pro', codeName: 'ZEUS' },
  { name: 'Xiaomi 12 Lite', codeName: 'TAOYAO' },
  { name: 'Xiaomi 12S', codeName: 'MAYFLY' },
  { name: 'Xiaomi 12S Pro', codeName: 'UNICORN' },
  { name: 'Xiaomi 12S Ultra', codeName: 'THOR' },

  // Xiaomi 13 Series
  { name: 'Xiaomi 13', codeName: 'FUXI' },
  { name: 'Xiaomi 13 Pro', codeName: 'NUWA' },
  { name: 'Xiaomi 13 Ultra', codeName: 'ISHTAR' },

  // Xiaomi 14 Series
  { name: 'Xiaomi 14', codeName: 'HOUJI' },
  { name: 'Xiaomi 14 Pro / Ti / Titanium Satellite Edition', codeName: 'SHENNONG' },
  { name: 'Xiaomi 14 Ultra / Ti', codeName: 'AURORA' },

  // Xiaomi 15 Series
  { name: 'Xiaomi 15', codeName: 'DADA' },
  { name: 'Xiaomi 15 Pro', codeName: 'HAOTIAN' },
  { name: 'Xiaomi 15 Ultra', codeName: 'XUANYUAN' },

  // Xiaomi 17 Series
  { name: 'Xiaomi 17', codeName: 'PUDDING' },
  { name: 'Xiaomi 17 Pro', codeName: 'PANDORA' },
  { name: 'Xiaomi 17 Pro Max', codeName: 'POPSICLE' },
  { name: 'Xiaomi 17 Ultra', codeName: 'NEZHA' },

  // Xiaomi Pad Series
  { name: 'Xiaomi Pad 6', codeName: 'PIPA' },
  { name: 'Xiaomi Pad 6 Pro', codeName: 'LIUQIN' },
  { name: 'Xiaomi Pad 6 Max 14', codeName: 'YUDI' },
  { name: 'Xiaomi Pad 6S Pro 12.4', codeName: 'SHENG' },
  { name: 'Xiaomi Pad 7', codeName: 'UKE' },
  { name: 'Xiaomi Pad 7 Pro', codeName: 'MUYU' },
  { name: 'Xiaomi Pad 8', codeName: 'YUPEI' },
  { name: 'Xiaomi Pad 8 Pro', codeName: 'PIANO' },

  // Xiaomi MIX Series
  { name: 'Xiaomi MIX 4', codeName: 'ODIN' },
  { name: 'Xiaomi MIX Fold 2', codeName: 'ZIZHAN' },
  { name: 'Xiaomi MIX Fold 3', codeName: 'BABYLON' },
  { name: 'Xiaomi MIX Fold 4', codeName: 'GOKU' },

  // Xiaomi Civi Series
  { name: 'Xiaomi Civi 2', codeName: 'ZIYI' },
  { name: 'Xiaomi Civi 4 Pro', codeName: 'CHENFENG' },

  // Redmi Series
  { name: 'Redmi 12 / 12R 5G / Redmi Note 12R', codeName: 'SKY' },
  { name: 'Redmi 14R 5G', codeName: 'FLAME' },

  // Redmi Note 12 Series
  { name: 'Redmi Note 12 5G / Note 12R Pro', codeName: 'SUNSTONE' },
  { name: 'Redmi Note 12 Pro Speed Edition', codeName: 'REDWOOD' },
  { name: 'Redmi Note 12 Turbo', codeName: 'MARBLE' },
  { name: 'Redmi Note 12 4G', codeName: 'TAPAS' },
  { name: 'Redmi Note 12 4G NFC', codeName: 'TOPAZ' },
  { name: 'Redmi Note 12 Pro 4G', codeName: 'SWEET_K6A' },

  // Redmi Note 13 Series
  { name: 'Redmi Note 13R 5G', codeName: 'BREEZE' },
  { name: 'Redmi Note 13 Pro', codeName: 'GARNET' },
  { name: 'Redmi Note 13 Global', codeName: 'SAPPHIRE' },
  { name: 'Redmi Note 13 NFC', codeName: 'SAPPHIREN' },

  // Redmi Note 14 Series
  { name: 'Redmi Note 14 Pro+ 5G', codeName: 'AMETHYST' },

  // Redmi Turbo Series
  { name: 'Redmi Turbo 3', codeName: 'PERIDOT' },
  { name: 'Redmi Turbo 4 Pro', codeName: 'ONYX' },

  // Redmi K50 Series
  { name: 'Redmi K50 Gaming Edition', codeName: 'INGRES' },
  { name: 'Redmi K50 Ultra', codeName: 'DITING' },

  // Redmi K60 Series
  { name: 'Redmi K60', codeName: 'MONDRIAN' },
  { name: 'Redmi K60 Pro', codeName: 'SOCRATES' },

  // Redmi K70 Series
  { name: 'Redmi K70', codeName: 'VERMEER' },
  { name: 'Redmi K70 Pro', codeName: 'MANET' },

  // Redmi K80 Series
  { name: 'Redmi K80', codeName: 'ZORN' },
  { name: 'Redmi K80 Pro', codeName: 'MIRO' },

  // Redmi Pad Series
  { name: 'Redmi Pad SE', codeName: 'XUN' },
  { name: 'Redmi Pad Pro / Harry Potter Edition', codeName: 'DIZI' },
  { name: 'Redmi Pad Pro 5G', codeName: 'RUAN' },

  // POCO Series
  { name: 'POCO X5 5G', codeName: 'MOONSTONE' },
  { name: 'Redmi K90 Pro Max / POCO F8 Ultra', codeName: 'MYRON' }
];
