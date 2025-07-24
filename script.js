document.getElementById("chat-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const inputField = document.getElementById("chat-input");
  const userInput = inputField.value.trim().toLowerCase();
  const chatLog = document.getElementById("chat-log");

  // List kata sensitif (kamu bisa tambah sendiri)
  const kataSensitif = ["uang online", "slot", "togel", "judi", "deposit", "chip", "pinjol", "scam", "penipuan", "transfer"];

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.innerHTML = "🧑 Kamu: " + userInput + laporButton(userInput);
  chatLog.appendChild(userMessage);

  inputField.value = "";

  const botMessage = document.createElement("div");
  botMessage.className = "message bot";

  const adaKataSensitif = kataSensitif.some(kata => userInput.includes(kata));

  if (adaKataSensitif) {
    botMessage.innerHTML = `
      ⚠️ <b>Peringatan:</b> Kami mendeteksi kata kunci yang berpotensi terkait aktivitas berisiko atau penipuan.<br>
      Harap waspada dan jangan berbagi informasi pribadi.
      <br><br>
      <a href="${whatsappLink(userInput)}" target="_blank">📤 Laporkan via WhatsApp</a>
    `;
  } else {
    botMessage.textContent = "🤖 SENTRI: Terima kasih! Kami sedang memproses informasi kamu.";
  }

  chatLog.appendChild(botMessage);
  chatLog.scrollTop = chatLog.scrollHeight;
});

// Fungsi tombol "Laporkan"
function laporButton(text) {
  const link = whatsappLink(text);
  return ` <a href="${link}" target="_blank" style="font-size: 0.9em;">📤 Laporkan</a>`;
}

// Format link WhatsApp
function whatsappLink(text) {
  const pesan = encodeURIComponent("Saya ingin melaporkan pesan berikut:\n\n" + text);
  return "https://wa.me/6281344121216?text=" + pesan; // Ganti nomor WA ke yang resmi nanti
}
