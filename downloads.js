// Debug: check if everything loaded
(function debugInit() {
  console.log('[HyperUR] downloads.js loaded');
  console.log('[HyperUR] devices exists:', typeof devices !== 'undefined', devices ? devices.length : 'N/A');
  console.log('[HyperUR] deviceROMs exists:', typeof deviceROMs !== 'undefined', deviceROMs ? Object.keys(deviceROMs).length : 'N/A');
})();

// Auto update year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

// ========================================
// ROM Data – multiple ROMs per device
// ========================================
const deviceROMs = {
  'AGATE':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1EjUEZr5a19qunb4BxpG4PKkDGSrH-Yd6?usp=drive_link' }],
  'AIR':        [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~2.9 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1JeD_kf4e2Tr8kt8GmTpNP1bbPuk5mmxl?usp=drive_link' }],
  'AMETHYST':   [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.2 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1jDqwRl9_zyrfFV7UdWhUfDgECxWe5RMS?usp=drive_link' }],
  'ARISTOTLE':  [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.6 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1FRzhwMOvjFp9KjuTis1aDJkbV_hX7eUM?usp=drive_link' }],
  'AURORA':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~5.1 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1aIuHoX-nq6a-SGnyCh1ZqwNTTSehDhX6?usp=drive_link' }],
  'BABYLON':    [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.5 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/17klvurHR6APjTCLQOcOb9nMQTomU95q0?usp=drive_link' }],
  'BERYL':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.4 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1e2xueDMGphHz0EbXx2so_FI-yaLG_6pP?usp=drive_link' }],
  'BREEZE':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.4 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1VqC1gluSUDCbl0zhs8lzkQGN-9Ez8IT5?usp=drive_link' }],
  'CHENFENG':   [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/16Na4Vdqtr2_32lpQq7Z0tzfeDFtaXksX?usp=drive_link' }],
  'CUPID':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.7 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1jQCuN1oXTYZtjGHIxANVyA1OOm6M5gd3?usp=drive_link' }],
  'DADA':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.0 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1qE477auA4QaUC3G6ED2QkWWkkJeyLb9H?usp=drive_link' }],
  'DAUMIER':    [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.6 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1lrl-eaiHjomg3xMLw5bh7e5eo11ENnUA?usp=drive_link' }],
  'DEGAS':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.6 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1TvvpMuNwgX4SDz4GG_LIFnPNJMM5e85o?usp=drive_link' }],
  'COROT':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/14_o_51Di5kBkHBLK9RVNfH-bhEFSw62r?usp=drive_link' }],
  'DITING':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.0 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/18r4oS9Zv8zKA0w4pEc2l4Bc_lK6TtwRE?usp=drive_link' }],
  'DIZI':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.5 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1Dx70A75TYBJqOTVpgd7GGHaxlAhzz61n?usp=drive_link' }],
  'DUCHAMP':    [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.6 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1MSMCSPbWWFc9pjQ3STmzbww1YdbrJ0F5?usp=drive_link' }],
  'EMERALD':    [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.5 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1pAJDzFl_xkhzojVYdmT7DmsmaXazrR86?usp=drive_link' }],
  'FIRE':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.2 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1gjVzgoHJJ9nYkFQFSumgcyeb8B0s5OfI?usp=drive_link' }],
  'FLAME':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.2 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1g22Olp0vak5C34ncDCWlnJHzhwHdshFs?usp=drive_link' }],
  'FUXI':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1mvAPQKSv8xLzf2OzTjwmkQn1y-Q-aQLV?usp=drive_link' }],
  'GALE':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.0 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/10lBpJXGbIBV3_KFFhPSK5u3ep2IlvvFK?usp=drive_link' }],
  'GOKU':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.5 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1sbgclxIayUT1escrXovD-ZMdSory2F9q?usp=drive_link' }],
  'GOYA':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.6 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1av_nou-oR2c2CC0Cyy8da_TtIAhumsW_?usp=drive_link' }],
  'GARNET':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1-k-FZTbdhtnJ9zCkQXYDsY5IOvnlcLbl?usp=drive_link' }],
  'GOLD':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.4 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1QfEBbQlJjJOX1jZAWDgY9R5euHWAwHqB?usp=drive_link' }],
  'HAOTIAN':    [
    { version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.2 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1qxZCjslk6Y4pLKKl5ZxGz8aWHdeBc0ep?usp=drive_link' },
    { version:'HyperOS 2.0', android:'Android 15', base:'CN', size:'~4.1 GB', date:'2025-02-20', link:'https://drive.google.com/drive/folders/1qxZCjslk6Y4pLKKl5ZxGz8aWHdeBc0ep?usp=drive_link' }
  ],
  'HOUJI':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1P9M0oJs5T1_LL0XZr3Q5ZPLnKKOf-af7?usp=drive_link' }],
  'INGRES':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.0 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1Efjazk3LEc1fMziF04_ZtD21hHPH7dCx?usp=drive_link' }],
  'ISHTAR':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/149g3mSEWbJpPswxRxKPyKM7pbqMWsxFs?usp=drive_link' }],
  'KLIMT':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1djg6oJattn0s1iehr0QAc7bLTzGiSiGL?usp=drive_link' }],
  'LAKE':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~2.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1w8FWdjFIeK21VNItVYxAgbfqkAM3dilF?usp=drive_link' }],
  'LISA':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.3 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1qSUADZM56bkuOBl48KhOvhuikpkwJsrF?usp=drive_link' }],
  'LIUQIN':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.2 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1mTSs-Skc8Sn8CMmy6hz8G_VpNJvzOgYu?usp=drive_link' }],
  'MANET':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1fNeTp6QXDEgysjKD4g9dHXYWS6mFJ7Sm?usp=drive_link' }],
  'MALACHITE':  [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.6 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1FVD0xXuS5Ig5fe5K_d1qdeC8pWDHOFas?usp=drive_link' }],
  'MARBLE':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.6 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1VpOeUXMznP0C3KQGuie6QJ3LUnpnLweF?usp=drive_link' }],
  'MATISSE':    [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.9 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1v3W_Qk0eDlQRCrByb-yBb_I9Su4bYyy9?usp=drive_link' }],
  'MAYFLY':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.7 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1wNeDegvuJq8JbDWlor04VjSka7EU-DTM?usp=drive_link' }],
  'MIRO':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.9 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1qAkqLmKY3bUJpc9aDSSGWCPH7O8pfa5w?usp=drive_link' }],
  'MONDRIAN':   [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/10E04p5-EPcybuOD-zY1f5AuQshDX3Ud8?usp=drive_link' }],
  'MOON':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.0 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1O6ntIk6D0xBftOrIZ_DphbkSwXlVJJbE?usp=drive_link' }],
  'MOONSTONE':  [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.5 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1IZLvZK_9_28Y-ATZE6DL7LTHI_4gpcjl?usp=sharing' }],
  'MUYU':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.3 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1Dwytk6e4CFSjpjVk3iPjIWYiLdhyVNd7?usp=drive_link' }],
  'NEZHA':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.2 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1z-Thwjo8rEWbz-aYKCLpB1CYZHPSb6X1?usp=drive_link' }],
  'NUWA':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.1 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1_PGqILV3bQ2F9PUIKLTBh6elIJwM2ayt?usp=drive_link' }],
  'ODIN':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.7 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1TzQHAXXUc_4rNrSkZgsi5Idve8H8b6w3?usp=drive_link' }],
  'ONYX':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1Fek4hUWbKmxWV1tiF8hPEEbntolEKB8a?usp=drive_link' }],
  'PEARL':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.7 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1yYYMr4oeCqO46QwHolyDOge1tegmLCrn?usp=drive_link' }],
  'PANDORA':    [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.0 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1LOShCYoV18vM2QpTA3StQIIhroHv_tM-?usp=drive_link' }],
  'PERIDOT':    [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.6 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1FuHUXRHmaBQRr0_iA6l3s0yaelBRe7KF?usp=drive_link' }],
  'PIPA':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.0 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1huAf5ahx0JbVRjrWNqEZOhGNNPa87kFN?usp=drive_link' }],
  'PLATO':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.6 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1Dtvk8J-0mLHWyHwoZ5GOuKSuld0qaBxn?usp=drive_link' }],
  'POPSICLE':   [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.2 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1vv0F8Ctapsb43QhTfzqHdM7_spLpXkIE?usp=drive_link' }],
  'PUDDING':    [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.9 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/190Ei_JXXyxc6evRwPVNPO6U8gOr2qOf8?usp=drive_link' }],
  'REDWOOD':    [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.6 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/15_qd_HWvQP_Ibk63yl9g9A_tciLxnToO?usp=drive_link' }],
  'REMBRANDT':  [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.7 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1CJ6_lvGTW-iCTMaKlnLjoIO6517XBQR5?usp=drive_link' }],
  'ROCK':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.2 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1YCXPF64r7xJRW4_ubF6Gxn5DRA7NPizk?usp=drive_link' }],
  'RODIN':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1bVdR9hY0_-FBAFSeAKxBekUk5u66NLjW?usp=drive_link' }],
  'ROTHKO':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.9 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/13YmkIF14ZElqIZmOXqjJuz3Vvf11Hf7X?usp=drive_link' }],
  'RUAN':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.5 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1eJ_uyZX26UUKNKYqqqYqLabfs4ghj6hw?usp=drive_link' }],
  'RUBENS':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1C_i1yZjvyhdpnXlspnOsZ-ZY5LccyDn2?usp=drive_link' }],
  'RUBY':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.6 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/179WmpMlbiT7fH261Tx8ks_dYjXbfIqDH?usp=drive_link' }],
  'SAPPHIRE':   [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.4 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1PPXDyrZ59VJqFURKxYwhbx7mBE0_wu4O?usp=drive_link' }],
  'SAPPHIREN':  [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.4 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/17TpI5IGZEgXHUlb0jpccE5-V89ExBsWe?usp=drive_link' }],
  'SEA':        [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.4 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1TdXwcKByGVop3YAfDbNziNfS2J2gXpz-?usp=drive_link' }],
  'SHENG':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.3 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1BNmOAL3nXmD9dQFmbvyodkXI-TQ2cCHV?usp=drive_link' }],
  'SHENNONG':   [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.1 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1cc35e8vFrK7_V8UHy_WySeXs1yrpr0VH?usp=drive_link' }],
  'SKY':        [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.2 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1PcthZ8L_4uw3hJvJIxXIOBJkmQSlmCVD?usp=drive_link' }],
  'SOCRATES':   [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1xLK-7eXyDvMkS6uZZzsjRdJI_2tXekKw?usp=drive_link' }],
  'STAR':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.9 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1veGfoZ2Zi4Zg7h7UveWpcUj5-cIletMo?usp=drive_link' }],
  'SUNSTONE':   [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.4 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1vvnMt0LsdrI9NMbW-tNvdb1eyc8VfKWe?usp=drive_link' }],
  'SWEET_K6A':  [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.5 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1O8Fckx7Hp5EeDy6hw8-RiEd6_NSOlJSv?usp=drive_link' }],
  'TAPAS':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.3 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/12GKvaZe4DMPWL2c9sE3tfrym6Iv-gSEB?usp=drive_link' }],
  'TAOYAO':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.4 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1geUJQ488m2mVs5K8Z8sTgcrbI-oM9nk3?usp=drive_link' }],
  'THOR':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1JYYWN7F_VRSU_1WXAPF9S0KfSaSrI18p?usp=drive_link' }],
  'TOPAZ':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.3 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1g5_5qAp13VOhoq8cjJG7tEHeKslZNFDy?usp=drive_link' }],
  'UKE':        [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.0 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1U6GHUHYCp5q_UN7o4C74yPKin6YM69P5?usp=drive_link' }],
  'UNICORN':    [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.0 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/13KbvwFOkgm23WW7EJkR4JVSz_lUwXAJ5?usp=drive_link' }],
  'VENUS':      [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1yzSqYr_xDL73C_SsreDaaw7pODApjx61?usp=drive_link' }],
  'VILI':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.9 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1MBnuZeu1bvbEvO0TSfwog4Korbb4gYB5?usp=drive_link' }],
  'VERMEER':    [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1JqT_apluCo4dnhUgsJL1PwEe4LXoYN0_?usp=drive_link' }],
  'XUN':        [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.5 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1IBMWQ17A_rXCO8KCE8F4lvo3WeXDvev6?usp=drive_link' }],
  'XUANYUAN':   [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~5.0 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1zH6erv7a1zL0TaeFIsO3CXdcvsPrQA8r?usp=drive_link' }],
  'YUDI':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.4 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1noUCEbaoan6DSEJtTGCGJO_621AHLzsH?usp=drive_link' }],
  'YUECHU':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.5 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1vq7CRfDNo9Rde-0tkP0v_NZkL25bxwuf?usp=drive_link' }],
  'YUNLUO':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1hakOO9eGRPV8qgE_iptgFHjoXD6lP34e?usp=drive_link' }],
  'ZEUS':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.0 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1UrSFNA9JxYIYb_P5uTLCl3UpJm61sKQG?usp=drive_link' }],
  'ZIRCON':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1D8gqFhnCshdX0s5JGIqe0Qn5nO8kj3nM?usp=drive_link' }],
  'ZIYI':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.5 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1CvvVvVZkAYCwlkJXaqRqseKeJujSY7Gk?usp=drive_link' }],
  'ZIZHAN':     [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~4.3 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1axaUQ0BndDrlGXt5wxMh9HBvz8HIDSDo?usp=drive_link' }],
  'ZORN':       [{ version:'HyperOS 2.0', android:'Android 15', base:'EU', size:'~3.8 GB', date:'2025-03-10', link:'https://drive.google.com/drive/folders/1seVZVDwH7YdLmU_9OUdk6sp61CFMDkbk?usp=drive_link' }]
};

// Theme toggle (light / dark)
const themeToggleBtn = document.getElementById('btn-theme-toggle');
const THEME_KEY = 'hypermods-theme';

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  if (themeToggleBtn) {
    const icon = theme === 'dark' ? '☀️' : '🌙';
    themeToggleBtn.querySelector('.theme-icon').textContent = icon;
  }
}

// Load saved theme
const savedTheme = window.localStorage.getItem(THEME_KEY);
if (savedTheme === 'light' || savedTheme === 'dark') {
  applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    const nextTheme = isDark ? 'light' : 'dark';
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
  });
}

// Modal đăng ký serial
const modalOverlay = document.getElementById('modal-serial');
const btnRegisterSerial = document.getElementById('btn-register-serial');
const modalClose = document.getElementById('modal-close');
const modalCancel = document.getElementById('modal-cancel');
const serialForm = document.getElementById('serial-form');

function openModal() {
  if (modalOverlay) {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

if (btnRegisterSerial) {
  btnRegisterSerial.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modalCancel) {
  modalCancel.addEventListener('click', closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

if (serialForm) {
  serialForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const serialInput = document.getElementById('serial-input');
    const emailInput = document.getElementById('email-input');
    const deviceInput = document.getElementById('device-input');
    
    console.log('Activation Serial:', serialInput?.value);
    console.log('Email:', emailInput?.value);
    console.log('Device:', deviceInput?.value);
    
    alert('Activation Serial thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    
    serialForm.reset();
    closeModal();
  });
}

// Device data
let allDevices = [];
let currentCategory = 'all';

// Get device category
function getDeviceCategory(device) {
  const name = device.name.toLowerCase();

  if (name.includes('poco')) return 'poco';
  if (name.includes('pad')) return 'pad';
  if (name.includes('mix')) return 'mix';
  if (name.includes('civi')) return 'civi';
  if (name.includes('redmi note')) return 'redmi-note';
  if (name.includes('redmi k') || name.includes('redmi turbo') || name.includes('redmi 14t') || name.includes('redmi 13t')) return 'redmi-k';
  if (name.includes('redmi')) return 'redmi';
  if (name.includes('xiaomi')) return 'xiaomi';

  return 'other';
}

// Filter devices by category
function filterDevicesByCategory(category) {
  if (category === 'all') return allDevices;
  return allDevices.filter(device => getDeviceCategory(device) === category);
}

// Render device cards in slider
function renderDeviceSlider(filteredDevices = null) {
  const slider = document.getElementById('device-slider');
  const deviceCountEl = document.getElementById('device-count');
  const noResultsEl = document.getElementById('no-results');

  if (!slider || typeof devices === 'undefined' || typeof deviceROMs === 'undefined') return;

  const devicesToRender = filteredDevices || allDevices;

  // Update count
  if (deviceCountEl) {
    deviceCountEl.textContent = `${devicesToRender.length} thiết bị`;
  }

  // Show/hide no results message
  if (noResultsEl) {
    noResultsEl.style.display = devicesToRender.length === 0 ? 'block' : 'none';
  }

  if (devicesToRender.length === 0) {
    slider.innerHTML = '';
    return;
  }

  slider.innerHTML = devicesToRender.map(device => {
    const roms = deviceROMs[device.codeName] || [];
    const hasROMs = roms.length > 0;

    // Get badge
    let badgeClass = 'badge-update';
    let badgeText = 'Dev';
    if (hasROMs) {
      badgeClass = 'badge-new';
      badgeText = roms.length > 1 ? `Stable x${roms.length}` : 'Stable';
    }

    // Get fallback icon based on device type
    let fallbackIcon = '📱';
    const name = device.name.toLowerCase();
    if (name.includes('pad')) fallbackIcon = '📲';
    else if (name.includes('ultra') || name.includes('pro max')) fallbackIcon = '⚡';
    else if (name.includes('pro')) fallbackIcon = '🔥';
    else if (name.includes('gaming')) fallbackIcon = '🎮';
    else if (name.includes('fold') || name.includes('flip')) fallbackIcon = '📱';
    else if (name.includes('lite')) fallbackIcon = '✨';

    // Device image path
    const imagePath = `img/devices/${device.codeName.toLowerCase()}.png`;

    // Build ROM list rows
    const romListHTML = hasROMs
      ? roms.map(rom => `
        <div class="rom-row">
          <div class="rom-info">
            <span class="rom-version">${rom.version}</span>
            <span class="rom-base">${rom.base}</span>
            <span class="rom-android">${rom.android}</span>
          </div>
          <div class="rom-meta">
            <span class="rom-size">💾 ${rom.size}</span>
            <span class="rom-date">📅 ${rom.date}</span>
          </div>
          <a href="${rom.link}" target="_blank" rel="noopener noreferrer" class="device-card-btn rom-btn">
            <span>⬇️</span> Tải
          </a>
        </div>`).join('')
      : '<div class="rom-coming-soon">🔜 ROM đang được phát triển</div>';

    return `
      <div class="device-card">
        <div class="device-card-image">
          <img src="${imagePath}"
               alt="${device.name}"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
               loading="lazy">
          <span class="device-fallback-icon" style="display:none;">${fallbackIcon}</span>
          <div class="device-card-status">
            <span class="device-badge ${badgeClass}">${badgeText}</span>
          </div>
        </div>
        <div class="device-card-body">
          <div class="device-card-header">
            <div>
              <h3>${device.name}</h3>
              <span class="device-codename">${device.codeName}</span>
            </div>
          </div>
          <div class="rom-list">${romListHTML}</div>
        </div>
      </div>
    `;
  }).join('');
}

// Initialize category tabs
function initCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active state
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Filter and render
      currentCategory = tab.dataset.category;
      const filtered = filterDevicesByCategory(currentCategory);
      
      // Also apply search filter if there's a search query
      const searchInput = document.getElementById('device-search');
      if (searchInput && searchInput.value.trim()) {
        const query = searchInput.value.toLowerCase().trim();
        const searchFiltered = filtered.filter(device => 
          device.name.toLowerCase().includes(query) || 
          device.codeName.toLowerCase().includes(query)
        );
        renderDeviceSlider(searchFiltered);
      } else {
        renderDeviceSlider(filtered);
      }
      
      // Reset slider position
      const slider = document.getElementById('device-slider');
      if (slider) slider.scrollLeft = 0;
    });
  });
}

// Initialize slider navigation
function initSliderNavigation() {
  // Slider navigation is no longer needed - using CSS grid layout
}

// Search functionality
function initSearch() {
  const searchInput = document.getElementById('device-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    // Get current category filtered devices
    let filtered = filterDevicesByCategory(currentCategory);
    
    if (query) {
      filtered = filtered.filter(device => 
        device.name.toLowerCase().includes(query) || 
        device.codeName.toLowerCase().includes(query)
      );
    }

    renderDeviceSlider(filtered);
  });
}

// Initialize when DOM is ready
function initDownloadPage() {
  // Ensure devices.js has loaded
  if (typeof devices === 'undefined' || !devices || devices.length === 0) {
    console.warn('[HyperUR] devices not loaded yet, retrying...');
    setTimeout(initDownloadPage, 200);
    return;
  }

  // Sort devices by Code Name (A-Z)
  allDevices = [...devices].sort((a, b) => a.codeName.localeCompare(b.codeName));
  console.log(`[HyperUR] Loaded ${allDevices.length} devices`);

  renderDeviceSlider();
  initCategoryTabs();
  initSliderNavigation();
  initSearch();
}

// Run on both DOMContentLoaded and window load (belt-and-suspenders)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initDownloadPage, 50));
} else {
  setTimeout(initDownloadPage, 50);
}
