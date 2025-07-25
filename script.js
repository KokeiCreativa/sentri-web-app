function deteksi() {
  const input = document.getElementById("inputText").value.toLowerCase();
  const hasil = document.getElementById("hasilDeteksi");
  const kataMencurigakan = ["judi", "slot", "togel", "penipuan", "scam"];
  let terdeteksi = [];

  kataMencurigakan.forEach(kata => {
    if (input.includes(kata)) {
      terdeteksi.push(kata);
    }
  });

  if (terdeteksi.length > 0) {
    hasil.innerHTML = "<p><strong>⚠️ Kata mencurigakan terdeteksi:</strong> " + terdeteksi.join(", ") + "</p>";
  } else {
    hasil.innerHTML = "<p>✅ Tidak ada kata mencurigakan.</p>";
  }
}