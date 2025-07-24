function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;
    
    const chatBox = document.getElementById("chat-box");
    const userMsg = document.createElement("div");
    userMsg.textContent = "Kamu: " + message;
    chatBox.appendChild(userMsg);

    const botMsg = document.createElement("div");
    if (/(slot|togel|penipuan|judi)/i.test(message)) {
        botMsg.textContent = "⚠️ Peringatan: Aktivitas yang Anda sebutkan termasuk tindakan mencurigakan. Harap berhati-hati.";
    } else {
        botMsg.textContent = "SENTRI: Terima kasih! Pertanyaan Anda sedang diproses...";
    }
    chatBox.appendChild(botMsg);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
