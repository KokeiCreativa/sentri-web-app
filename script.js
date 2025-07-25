function cekPenipuan() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const hasil = document.getElementById("hasilDeteksi");

  const kataKunciBerbahaya = [
    "slot", "togel", "pinjaman ilegal", "deposit", "cuan cepat", "transfer dulu", "investasi bodong",
    "wd", "jp", "parlay", "kasino", "chip gratis", "gacor", "spin", "auto menang", "reseller palsu"
  ];

  const terdeteksi = kataKunciBerbahaya.filter(kata => input.includes(kata));

  if (terdeteksi.length > 0) {
    hasil.innerHTML = `⚠️ Kata mencurigakan terdeteksi: <strong>${terdeteksi.join(", ")}</strong>. Harap berhati-hati!`;
    hasil.style.color = "red";
  } else {
    hasil.innerHTML = "✅ Tidak ditemukan indikasi penipuan atau kata mencurigakan.";
    hasil.style.color = "green";
  }
}
