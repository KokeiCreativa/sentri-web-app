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
  const lowerText = userText.toLowerCase();

  if (lowerText.includes("slot") || lowerText.includes("togel")) {
    appendMessage("SENTRI", "🚨 Perhatian: Hindari aktivitas judi online. Ini bisa membahayakan kondisi finansial Anda.");
  } else if (lowerText.includes("pinjam uang") || lowerText.includes("pinjol")) {
    appendMessage("SENTRI", "💡 Hati-hati dengan pinjaman online ilegal! Cek legalitasnya di: https://cekfintech.id");
  } else if (lowerText.includes("investasi") && lowerText.includes("cepat")) {
    appendMessage("SENTRI", "📛 Waspada penipuan! Tidak ada investasi yang cepat dan pasti untung. Pastikan legalitasnya di OJK.");
  } else if (lowerText.includes("hadiah") && lowerText.includes("link")) {
    appendMessage("SENTRI", "⚠️ Jangan sembarangan klik link hadiah! Banyak penipuan berkedok undian.");
  } else {
    appendMessage("SENTRI", "💡 Periksa kembali link sebelum klik. Pastikan sumber terpercaya ya!");
  }
}
