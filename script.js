
const kataSensitif = ["togel", "slot", "penipuan", "judi", "scam", "nipu"];

function cekKataSensitif(userInput) {
  const lowerInput = userInput.toLowerCase();
  for (let kata of kataSensitif) {
    if (lowerInput.includes(kata)) {
      return `⚠️ Peringatan: Kata "${kata}" terdeteksi. Hindari aktivitas ilegal. Jika ini laporan, silakan hubungi kami via WhatsApp.`;
    }
  }
  return null;
}

function getBotResponse(input) {
  const peringatan = cekKataSensitif(input);
  if (peringatan) {
    return peringatan;
  }

  if (input.toLowerCase().includes("halo")) {
    return "Hai! Ada yang bisa saya bantu terkait keuangan atau keamanan digital?";
  }

  return "Maaf, saya belum memahami maksud Anda. Coba dengan kata lain.";
}

function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  if (userInput.trim() === "") return;

  const chatLog = document.getElementById("chatLog");

  const userDiv = document.createElement("div");
  userDiv.className = "userText";
  userDiv.innerHTML = `<strong>Anda:</strong> ${userInput}`;
  chatLog.appendChild(userDiv);

  const botResponse = getBotResponse(userInput);
  const botDiv = document.createElement("div");
  botDiv.className = "botText";
  botDiv.innerHTML = `<strong>SENTRI:</strong> ${botResponse} <button onclick="copyBotText()">📋</button>`;
  chatLog.appendChild(botDiv);

  document.getElementById("userInput").value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}

function copyBotText() {
  const messages = document.getElementsByClassName("botText");
  if (messages.length > 0) {
    const lastMessage = messages[messages.length - 1].innerText;
    navigator.clipboard.writeText(lastMessage);
    alert("Jawaban disalin ke clipboard!");
  }
}

window.onload = function() {
  const tips = [
    "💡 Jangan bagikan OTP Anda kepada siapa pun.",
    "💡 Hanya gunakan aplikasi resmi untuk transaksi keuangan.",
    "💡 Waspada terhadap penipuan berkedok hadiah.",
    "💡 Periksa kembali link sebelum klik."
  ];
  const acak = tips[Math.floor(Math.random() * tips.length)];
  const chatLog = document.getElementById("chatLog");
  const tipDiv = document.createElement("div");
  tipDiv.className = "botText";
  tipDiv.innerHTML = `<strong>SENTRI:</strong> ${acak}`;
  chatLog.appendChild(tipDiv);
};
