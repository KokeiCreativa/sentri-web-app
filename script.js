const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

function addMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendButton.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text !== "") {
    addMessage("Kamu", text);
    userInput.value = "";
    setTimeout(() => {
      if (/judi|togel|slot|kasino|chip/i.test(text)) {
        addMessage("SENTRI", "⚠️ Awas! Aktivitas seperti judi online atau slot dapat merugikan secara finansial dan termasuk ilegal.");
      } else {
        addMessage("SENTRI", "Terima kasih atas pertanyaannya. Kami sedang memproses jawaban...");
      }
    }, 1000);
  }
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendButton.click();
  }
});
