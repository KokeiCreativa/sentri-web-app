document.getElementById("chat-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const inputField = document.getElementById("chat-input");
  const userInput = inputField.value.trim().toLowerCase();
  const chatLog = document.getElementById("chat-log");

  // Tambah list kata sensitif
  const kataSensitif = ["uang online", "slot", "togel", "judi", "deposit", "chip", "pinjol", "scam", "penipuan", "transfer"];

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = "🧑 Kamu: " + userInput;
  chatLog.appendChild(userMessage);

  inputField.value = "";

  const botMessage = document.createElement("div");
  botMessage.className = "message bot";

  // Deteksi kata sensitif
  const adaKataSensitif = kataSensitif.some(kata => userInput.includes(kata));
  
  if (adaKataSensitif) {
    botMessage.innerHTML = "⚠️ <b>Peringatan:</b> Kami mendeteksi kata kunci yang berpotensi terkait aktivitas berisiko atau penipuan. Harap waspada dan jangan berbagi informasi pribadi.";
  } else {
    botMessage.textContent = "🤖 SENTRI: Terima kasih! Kami sedang memproses informasi kamu.";
  }

  chatLog.appendChild(botMessage);
  chatLog.scrollTop = chatLog.scrollHeight;
});
