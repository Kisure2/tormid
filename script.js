// script.js — Bagian 1: setup + data PC + renderer list + event handler (placeholder laptop)

// ---------------------- HELPERS ----------------------
/** Escape minimal untuk teks yang dimasukkan ke HTML */
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Format label rentang harga */
function formatRangeLabel(key) {
  if (key === "range1") return "Rp 9.000.000 - Rp 13.000.000";
  if (key === "range2") return "Rp 13.000.001 - Rp 17.000.000";
  return "Di atas Rp 17.000.000";
}

// ---------------------- DATA PC (list teks) ----------------------
const pcData = {
  range1: { // Rp 9.000.000 - Rp 13.000.000
    gaming: [
      "Ryzen 5 5600 + RTX 3060 + 16GB RAM",
      "Intel i5-12400F + RX 6600 + 16GB RAM",
      "Ryzen 5 5600G (iGPU build hemat)",
      "Intel i3-13100F + GTX 1660 Super + 16GB RAM",
      "Ryzen 5 4500 + GTX 1650 Super + 16GB RAM",
      "Intel i5-10400F + RX 6500 XT + 16GB RAM",
      "Ryzen 3 4100 + GTX 1660 + 16GB RAM",
      "Intel i3-12100F + GTX 1650 + 8GB RAM",
      "Ryzen 5 3600 + RX 580 + 16GB RAM",
      "Intel i5-11400 + GTX 1660 Ti + 16GB RAM"
    ],
    editing: [
      "Ryzen 5 5600G + 16GB RAM + SSD 1TB",
      "Intel i5-12400 + RTX 3050 + 16GB RAM",
      "Ryzen 7 5700G + 32GB RAM",
      "Intel i7-11700 + 16GB RAM + SSD 1TB",
      "Ryzen 5 4600G + 16GB RAM + SSD 512GB",
      "Intel i5-11400 + GTX 1650 + 16GB RAM",
      "Ryzen 5 3600 + 16GB RAM + SSD 512GB",
      "Intel i7-10700 + 16GB RAM + HDD 1TB",
      "Ryzen 5 5600 + 16GB RAM + SSD 512GB",
      "Intel i5-12600 + 32GB RAM + SSD 1TB"
    ],
    office: [
      "Intel i3-12100 + 8GB RAM + SSD 512GB",
      "Ryzen 3 4100 + 8GB RAM + SSD 512GB",
      "Intel i5-10400 + 8GB RAM + SSD 256GB",
      "Ryzen 5 4500 + 8GB RAM + SSD 512GB",
      "Intel i3-10100 + 8GB RAM + SSD 512GB",
      "Ryzen 5 3400G + 8GB RAM + SSD 256GB",
      "Intel i3-13100 + 8GB RAM + SSD 256GB",
      "Ryzen 3 3200G + 8GB RAM + SSD 256GB",
      "Intel i5-12400 + 16GB RAM + SSD 512GB",
      "Ryzen 5 5600G + 16GB RAM + SSD 512GB"
    ]
  },

  range2: { // Rp 13.000.001 - Rp 17.000.000
    gaming: [
      "Ryzen 7 5800X + RTX 4070 + 32GB RAM",
      "Intel i5-13600K + RTX 4070 + 32GB RAM",
      "Ryzen 7 7700 + RX 7800XT + 32GB RAM",
      "Intel i7-12700K + RTX 4060 Ti + 32GB RAM",
      "Ryzen 9 5900X + RTX 4070 Ti + 32GB RAM",
      "Intel i7-13700K + RTX 4070 + 32GB RAM",
      "Ryzen 7 5800X3D + RTX 4070 Ti + 32GB RAM",
      "Intel i9-12900K + RTX 4060 + 32GB RAM",
      "Ryzen 9 7900 + RX 7800XT + 32GB RAM",
      "Intel i7-12700F + RTX 4060 Ti + 32GB RAM"
    ],
    editing: [
      "Intel i7-12700 + RTX 3060 Ti + 32GB RAM",
      "Ryzen 7 5700X + RTX 3070 + 32GB RAM",
      "Ryzen 9 5900X + GTX 1660S + 32GB RAM",
      "Intel i9-12900K + RTX 4070 + 32GB RAM",
      "Ryzen 7 7700 + RTX 4070 + 32GB RAM",
      "Intel i7-13700K + RTX 3060 + 32GB RAM",
      "Ryzen 9 7900X + RTX 4070 Ti + 64GB RAM",
      "Intel i7-13700KF + RTX 4070 Ti + 32GB RAM",
      "Ryzen 7 5800X3D + RTX 4070 + 32GB RAM",
      "Intel i9-13900F + RTX 4060 + 32GB RAM"
    ],
    office: [
      "Intel i5-13400 + 16GB RAM + SSD 1TB",
      "Ryzen 5 7600 + 16GB RAM + SSD 1TB",
      "Intel i7-12700 + 32GB RAM + SSD 1TB",
      "Ryzen 7 5800 + 16GB RAM + SSD 512GB",
      "Intel i5-13600 + 16GB RAM + SSD 1TB",
      "Ryzen 7 7700 + 32GB RAM + SSD 1TB",
      "Intel i5-12600K + 16GB RAM + SSD 512GB",
      "Ryzen 5 5600G + 16GB RAM + SSD 512GB",
      "Intel i3-13100 + 8GB RAM + SSD 512GB",
      "Ryzen 7 5800G + 16GB RAM + SSD 1TB"
    ]
  },

  range3: { // Di atas Rp 17.000.000
    gaming: [
      "Ryzen 7 7800X3D + RTX 4080 + 32GB RAM",
      "Intel i9-13900K + RTX 4080 + 64GB RAM",
      "Ryzen 9 7950X + RTX 4090 + 64GB RAM",
      "Intel i9-14900K + RTX 4080 + 64GB RAM",
      "Ryzen 9 9950X + RTX 4090 + 64GB RAM",
      "Intel i7-14700K + RTX 4080 + 32GB RAM",
      "Ryzen 9 7900X3D + RTX 4080 + 64GB RAM",
      "Intel i9-13900KF + RTX 4090 + 64GB RAM",
      "Ryzen 9 7950X3D + RTX 4090 + 64GB RAM",
      "Intel i9-14900KF + RTX 4080 Super + 64GB RAM"
    ],
    editing: [
      "Intel i9-13900K + RTX 4070 Ti + 64GB RAM + SSD 2TB",
      "Ryzen 9 7950X + RTX 4080 + 64GB RAM",
      "Mac Studio M2 Ultra (24-core, 64GB RAM)",
      "Intel i9-14900K + RTX 4090 + 64GB RAM",
      "Ryzen 9 9950X + RTX 4080 + 64GB RAM",
      "Intel i7-14700KF + RTX 4070 Ti + 64GB RAM",
      "Ryzen 9 7900X3D + RTX 4080 + 64GB RAM",
      "Intel i9-13900KF + RTX 4070 Ti + 64GB RAM",
      "Ryzen 9 7950X3D + RTX 4090 + 64GB RAM",
      "Intel i9-14900KF + RTX 4080 + 64GB RAM"
    ],
    office: [
      "Intel i7-13700 + 32GB RAM + SSD 1TB",
      "Ryzen 9 7900 + 32GB RAM + SSD 1TB",
      "Intel i9-13900 + 64GB RAM + SSD 2TB",
      "Ryzen 7 7700 + 32GB RAM + SSD 1TB",
      "Intel i7-14700K + 32GB RAM + SSD 1TB",
      "Ryzen 9 7950X + 64GB RAM + SSD 2TB",
      "Intel i9-14900K + 64GB RAM + SSD 2TB",
      "Ryzen 9 9950X + 64GB RAM + SSD 2TB",
      "Intel i9-13900KF + 64GB RAM + SSD 2TB",
      "Ryzen 7 7800X3D + 32GB RAM + SSD 1TB"
    ]
  }
};

// ---------------------- RENDERER PC (list) ----------------------
function renderPCList(list, tipe, kebutuhan, rangeKey) {
  const listItems = list.map(item => `<li>${escapeHtml(item)}</li>`).join("");
  return `
    <h3>🖥️ Rekomendasi ${escapeHtml(tipe.toUpperCase())} — ${escapeHtml(kebutuhan.toUpperCase())} — ${formatRangeLabel(rangeKey)}</h3>
    <ul class="pc-list">${listItems}</ul>
  `;
}

// ---------------------- EVENT HANDLER ----------------------
document.getElementById("tombol").addEventListener("click", function() {
  const budgetRange = document.getElementById("budget").value;
  const kebutuhan = document.getElementById("kebutuhan").value;
  const tipe = document.getElementById("tipe").value;
  const hasil = document.getElementById("hasil");

  if (!budgetRange) {
    hasil.innerHTML = "<p>⚠️ Silakan pilih kisaran budget terlebih dahulu!</p>";
    return;
  }

  // PC branch
  if (tipe === "pc") {
    const list = (pcData[budgetRange] && pcData[budgetRange][kebutuhan]) || [];
    if (list.length === 0) {
      hasil.innerHTML = "<p>Tidak ada rekomendasi PC untuk kategori ini.</p>";
      return;
    }
    hasil.innerHTML = renderPCList(list, tipe, kebutuhan, budgetRange);
    return;
  }

  // LAPTOP branch
  if (tipe === "laptop") {
    renderLaptopSection(budgetRange, kebutuhan, hasil);
    return;
  }

  // fallback
  hasil.innerHTML = "<p>Pilih tipe perangkat: PC atau Laptop.</p>";
});
// ---------------------- BAGIAN 2: DATA LAPTOP (90 item) + RENDERER CARD ----------------------

// DATA LAPTOP: 3 range x 3 kebutuhan x 10 item (gambar nyata + deskripsi)
const laptopData = {
  range1: { // Rp 9.000.000 - Rp 13.000.000
    gaming: [
      { nama: "ASUS TUF Gaming A15 (2023) - Ryzen 5 / RTX 3050", gambar: "ASUS TUF GAMING A15.jpeg", deskripsi: "Pilihan gaming stabil: Ryzen 5 + RTX 3050, layar 144Hz." },
      { nama: "Acer Nitro 5 (AN515) - i5 / RTX 3050", gambar: "Acer Nitro 5 (AN515).jpeg", deskripsi: "Seri Nitro populer: performa gaming bagus untuk harga menengah." },
      { nama: "Lenovo LOQ 15 - Ryzen 5 / RTX 2050", gambar: "Lenovo LOQ 15.jpeg", deskripsi: "Desain modern, layar 144Hz, cocok buat gamer kasual." },
      { nama: "HP Victus 15 - i5 / GTX 1650", gambar: "HP Victus 15.jpeg", deskripsi: "Pilihan entry gaming HP, harga kompetitif dan build solid." },
    ],
    editing: [
      { nama: "ASUS Vivobook Pro 15 - Ryzen 7 / OLED", gambar: "ASUS Vivobook Pro 15.jpeg", deskripsi: "Layar OLED dan CPU kuat; bagus untuk editing foto & video ringan." },
      { nama: "HP Envy 15 - i7 / GPU entry", gambar: "HP Envy 15.jpeg", deskripsi: "Layar akurat warna, performa baik untuk content creation." },
      { nama: "MacBook Air M2 (varian 8/256) - Apple Silicon", gambar: "MacBook Air M2.jpeg", deskripsi: "Ringan, sangat efisien untuk editing ringan dan portabel." },
      { nama: "ASUS Zenbook 14 OLED - i5 / 16GB", gambar: "ASUS Zenbook 14 OLED.jpeg", deskripsi: "Layar OLED tajam, cocok untuk warna dan desain grafis." },
    ],
    office: [
      { nama: "ASUS ExpertBook B1 - i3 / 8GB", gambar: "ASUS ExpertBook B1.jpeg", deskripsi: "Laptop bisnis murah, tahan lama dan ringkas." },
      { nama: "Lenovo IdeaPad 3 - i5 / 8GB", gambar: "Lenovo IdeaPad 3.jpeg", deskripsi: "Pilihan ekonomis untuk kerja dan kuliah." },
      { nama: "HP 240 G9 - i3 / 8GB", gambar: "HP 240 G9.jpeg", deskripsi: "Ringan, cocok untuk tugas kantor dasar." },
      { nama: "ASUS Vivobook Go 14 - Ryzen 3", gambar: "ASUS Vivobook Go 14.jpeg", deskripsi: "Portabel dan sederhana untuk produktivitas harian." },
    ]
  },

  range2: { // Rp 13.000.001 - Rp 17.000.000
    gaming: [
      { nama: "ASUS TUF F15 / F16 - i7 / RTX 3050 Ti", gambar: "ASUS TUF F15.jpeg", deskripsi: "Gaming kuat, layar 144/165Hz, pendingin efisien." },
      { nama: "Lenovo Legion 5 - Ryzen 7 / RTX 3060", gambar: "Lenovo Legion 5.jpeg", deskripsi: "Salah satu favorit gamer di mid-range." },
      { nama: "MSI Katana 15 - i7 / RTX 3060", gambar: "MSI Katana 15.jpeg", deskripsi: "Performa kencang dengan harga kompetitif." },
      { nama: "HP Omen 16 - i7 / RTX 3060", gambar: "HP Omen 16.jpeg", deskripsi: "Pendinginan baik dan opsi upgrade RAM." },
    ],
    editing: [
      { nama: "MSI Creator M16 - i7 / RTX 3050", gambar: "MSI Creator M16.jpeg", deskripsi: "Dibuat untuk creator, layar bagus & GPU untuk rendering." },
      { nama: "ASUS ZenBook Pro 14 - i7 / RTX 3050 Ti", gambar: "ASUS ZenBook Pro 14.jpeg", deskripsi: "Kecil, powerful, layar akurat warna." },
      { nama: "Dell Inspiron 16 Plus - i7 / RTX 3050", gambar: "Dell Inspiron 16 Plus.jpeg", deskripsi: "Kinerja solid untuk editing video full HD." },
      { nama: "HP Envy 15 - i7 / GTX/RTX entry", gambar: "HP Envy 15.jpeg", deskripsi: "Pilihan kreator dengan layar besar dan akurat." },
    ],
    office: [
      { nama: "ASUS Zenbook 14 - i7 / 16GB", gambar: "ASUS Zenbook 14.jpeg", deskripsi: "Ultrabook tipis, performa tinggi untuk office." },
      { nama: "HP Spectre x360 13 - i7 / 16GB", gambar: "HP Spectre x360 13.jpeg", deskripsi: "Convertible premium untuk eksekutif." },
      { nama: "Dell XPS 13 - i7 / 16GB", gambar: "Dell XPS 13.jpeg", deskripsi: "Ringkas, powerful, layar tajam." },
      { nama: "Lenovo Yoga Slim 9 - i7", gambar: "Lenovo Yoga Slim 9.jpeg", deskripsi: "Design premium & portabilitas tinggi." },
    ]
  },

  range3: { // Di atas Rp 17.000.000
    gaming: [
      { nama: "ASUS ROG Strix G16 - i9 / RTX 4070", gambar: "ASUS ROG Strix G16.jpeg", deskripsi: "Gaming high-end, cocok untuk 1440p & 4K." },
      { nama: "MSI Raider GE68HX - i9 / RTX 4080", gambar: "MSI Raider GE68HX.jpeg", deskripsi: "Powerhouse untuk gamer kompetitif dan content creator." },
      { nama: "Lenovo Legion 9i - i9 / RTX 4090", gambar: "Lenovo Legion 9i.jpeg", deskripsi: "Top-tier performance dengan fitur kelas atas." },
      { nama: "ASUS ROG Flow X16 - i9 / RTX 4070", gambar: "ASUS ROG Flow X16.jpeg", deskripsi: "Convertible gaming premium dengan performa tinggi." },
    ],
    editing: [
      { nama: "MacBook Pro 16 (M2 Max) - 32GB/1TB", gambar: "MacBook Pro 16 (M2 Max).jpeg", deskripsi: "Workstation mobile teratas untuk editing & rendering." },
      { nama: "ASUS ProArt Studiobook 16 - Ryzen 9 / RTX 4070", gambar: "ASUS ProArt Studiobook 16.jpeg", deskripsi: "Dirancang khusus untuk profesional kreatif." },
      { nama: "Dell XPS 17 - i9 / RTX 4070", gambar: "Dell XPS 17.jpeg", deskripsi: "Layar besar dan performa luar biasa untuk editing." },
      { nama: "MSI Creator Z17 - i9 / RTX 4070", gambar: "MSI Creator Z17.jpeg", deskripsi: "Khusus creator dengan layar dan GPU kuat." },
    ],
    office: [
      { nama: "MacBook Air M3 - 8/512GB", gambar: "MacBook Air M3.jpeg", deskripsi: "Ringan, cepat, dan sangat efisien untuk produktivitas." },
      { nama: "Dell XPS 13 Plus - i7 / 16GB", gambar: "Dell XPS 13 Plus.jpeg", deskripsi: "Design premium dan performa untuk profesional." },
      { nama: "HP Spectre x360 14 - i7 / OLED", gambar: "HP Spectre x360 14.jpeg", deskripsi: "Konvertibel premium untuk eksekutif dan presentasi." },
      { nama: "Lenovo Yoga 9i - i7 / 16GB", gambar: "Lenovo Yoga 9i.jpeg", deskripsi: "2-in-1 premium dengan audio dan layar berkualitas." },
    ]
  }
};

// ---------------------- RENDERER CARD (LAPTOP) ----------------------
function renderLaptopCards(list, tipe, kebutuhan, rangeKey) {
  // buat HTML card grid — gunakan escapeHtml dari Bagian 1
  const cards = list.map(item => `
    <div class="produk-card">
      <img src="${item.gambar}" alt="${escapeHtml(item.nama)}" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x200?text=No+Image'">
      <h3>${escapeHtml(item.nama)}</h3>
      <p>${escapeHtml(item.deskripsi)}</p>
    </div>
  `).join("");

  return `
    <h3>💻 Rekomendasi ${escapeHtml(tipe.toUpperCase())} — ${escapeHtml(kebutuhan.toUpperCase())} — ${formatRangeLabel(rangeKey)}</h3>
    <div class="produk-container">${cards}</div>
  `;
}

// ---------------------- HELPER: render laptop section (dipanggil dari event handler Bagian 1) ----------------------
function renderLaptopSection(budgetRange, kebutuhan, hasilElement) {
  const list = (laptopData[budgetRange] && laptopData[budgetRange][kebutuhan]) || [];
  if (list.length === 0) {
    hasilElement.innerHTML = "<p>Tidak ada rekomendasi laptop untuk kategori ini.</p>";
    return;
  }
  hasilElement.innerHTML = renderLaptopCards(list, "laptop", kebutuhan, budgetRange);
}


