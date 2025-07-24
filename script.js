document.addEventListener("DOMContentLoaded", function () {
  const chatbox = document.querySelector(".chatbox");
  const userInput = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");

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

    if (containsBlacklistedWord(userText)) {
      appendMessage("bot", "⚠️ Kata tersebut termasuk dalam daftar yang dilarang. Harap gunakan bahasa yang sopan.");
      return;
    }

    setTimeout(() => {
      appendMessage("bot", "Pesan diterima. Ada yang bisa saya bantu lagi?");
    }, 800);
  });

  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendBtn.click();
  });
});
