function kirim() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const responseBox = document.getElementById("response");

  const kataTerlarang = ["slot", "togel", "penipuan", "uang cepat", "uang online", "judi", "scam", "cuan instan"];
  const terdeteksi = kataTerlarang.find(kata => input.includes(kata));

  if (!input.trim()) {
    responseBox.innerHTML = "Silakan isi pesan terlebih dahulu.";
  } else if (terdeteksi) {
    responseBox.innerHTML = `⚠️ Peringatan: Terdeteksi kata mencurigakan (“${terdeteksi}”). Harap berhati-hati dan hindari penipuan atau praktik ilegal.`;
  } else {
    responseBox.innerHTML = `✅ Terima kasih atas pertanyaannya. Data sedang diproses...`;
  }
}
