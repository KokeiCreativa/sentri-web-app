
const kataPenipuan = ["menang hadiah", "transfer dulu", "pinjam uang", "akun diblokir", "top up", "klik link", "slot", "togel", "investasi bodong"];

function deteksi() {
  const input = document.getElementById("inputText").value.toLowerCase();
  const peringatan = document.getElementById("peringatan");
  const alarm = document.getElementById("alarm");

  const terdeteksi = kataPenipuan.some(kata => input.includes(kata));

  if (terdeteksi) {
    peringatan.textContent = "⚠️ Pesan ini mengandung unsur penipuan!";
    peringatan.style.color = "red";
    alarm.play();
  } else {
    peringatan.textContent = "✅ Aman, tidak ada indikasi penipuan.";
    peringatan.style.color = "green";
  }
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const output = document.getElementById("chat-output");

  const userMessage = input.value.trim();
  if (userMessage === "") return;

  const botReply = getBotReply(userMessage);
  output.innerHTML += `<p><strong>Anda:</strong> ${userMessage}</p>`;
  output.innerHTML += `<p><strong>SENTRI:</strong> ${botReply}</p>`;
  input.value = "";
  output.scrollTop = output.scrollHeight;
}

function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("pinjam") || msg.includes("uang"))
    return "Hati-hati dengan tawaran pinjaman cepat. Pastikan legalitasnya.";
  if (msg.includes("investasi"))
    return "Pastikan platform investasi sudah terdaftar di OJK.";
  if (msg.includes("slot") || msg.includes("togel"))
    return "Akses game atau judi online bisa berisiko dan merugikan.";
  return "Maaf, saya belum mengerti. Coba pertanyaan lain soal keuangan.";
}
