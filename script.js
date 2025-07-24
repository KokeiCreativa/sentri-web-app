document.addEventListener("DOMContentLoaded", function () {
  const chatbox = document.querySelector(".chatbox");
  const userInput = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");

  // Kata-kata sensitif untuk peringatan
  const blacklist = ["judi", "togel", "slot", "penipuan", "scam", "hack"];

  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function containsBlacklistedWord(text) {
    return blacklist.some(word => text.toLowerCase().includes(word));
  }

  sendBtn.addEventListener("click", function () {
    const userText = userInput.value.trim();
    if (userText === "") return;

    appendMessage("user", userText);
    userInput.value = "";

    // Deteksi kata berbahaya
    if (containsBlacklistedWord(userText)) {
      appendMessage("bot", "⚠️ Kami mendeteksi kata yang tidak diperbolehkan. Harap hindari penggunaan kata seperti itu.");
      return;
    }

    // Simulasi respons AI
    setTimeout(() => {
      appendMessage("bot", "Terima kasih! Pesan Anda telah diterima.");
    }, 800);
  });

  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendBtn.click();
  });
});
