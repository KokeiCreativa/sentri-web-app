function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  const chatbox = document.getElementById("chatbox");
  const userMessage = document.createElement("div");
  userMessage.textContent = "Kamu: " + message;
  chatbox.appendChild(userMessage);

  const botMessage = document.createElement("div");
  if (/togel|slot|judi/i.test(message)) {
    botMessage.textContent = "⚠️ Peringatan: Kata terkait aktivitas ilegal terdeteksi!";
  } else {
    botMessage.textContent = "SENTRI: Terima kasih. Kami akan bantu menjawab pertanyaanmu.";
  }
  chatbox.appendChild(botMessage);

  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}
