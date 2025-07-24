// script.js
const chatArea = document.getElementById("chat-area");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const userText = userInput.value.trim();
  if (userText !== "") {
    appendMessage("Anda", userText);
    generateResponse(userText);
    userInput.value = "";
  }
});

function appendMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatArea.appendChild(messageElement);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function generateResponse(userText) {
  let response = "";

  // Deteksi pesan mengandung kata berisiko
  const lowerText = userText.toLowerCase();

  if (lowerText.includes("slot") || lowerText.includes("togel")) {
    response = "🚨 Perhatian: Hindari aktivitas judi online. Ini bisa membahayakan kondisi finansial Anda.";
  } else if (lowerText.includes("pinjam uang") || lowerText.includes("pinjol")) {
    response = "💡 Hati-hati dengan pinjaman online ilegal! Cek legalitasnya di: https://cekfintech.id";
  } else if (lowerText.includes("investasi") && lowerText.includes("cepat")) {
    response = "📛 Waspada penipuan! Tidak ada investasi yang cepat dan pasti untung. Pastikan legalitasnya di OJK.";
  } else {
    response = "💡 Periksa kembali link sebelum klik. Pastikan sumber terpercaya ya!";
  }

  appendMessage("SENTRI", response);
}
