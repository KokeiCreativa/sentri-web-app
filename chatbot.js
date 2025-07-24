
// chatbot.js — dengan fitur deteksi kata kunci mencurigakan

function detectKeywords(input) {
  const riskyWords = [
    "slot", "togel", "jackpot", "deposit", "chip", "judi", "pulsa gratis",
    "menang pulsa", "pinjaman online", "pinjol", "scam", "undian", "hoki"
  ];

  const lowerInput = input.toLowerCase();
  return riskyWords.some(word => lowerInput.includes(word));
}

function generateResponse(input) {
  if (detectKeywords(input)) {
    return "⚠️ Aktivitas ini terindikasi judi/penipuan. Hindari hal seperti ini ya. Lebih baik gunakan uangmu untuk investasi aman seperti reksa dana atau emas digital.";
  }

  // Contoh respons default
  return "Terima kasih. Ada yang bisa saya bantu soal keuangan digital?";
}

// Event listener tombol kirim (asumsi HTML ada input dengan id='user-input' dan div dengan id='chat')
document.getElementById("send-btn").addEventListener("click", function () {
  const userInput = document.getElementById("user-input").value.trim();
  if (userInput === "") return;

  const chatBox = document.getElementById("chat");
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = userInput;
  chatBox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";
  botMsg.textContent = generateResponse(userInput);
  chatBox.appendChild(botMsg);

  document.getElementById("user-input").value = "";
});
