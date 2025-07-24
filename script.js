const chatlog = document.getElementById("chatlog");
const input = document.getElementById("userInput");

function sendMessage() {
    const message = input.value.trim();
    if (!message) return;

    appendMessage("user", message);
    input.value = "";

    setTimeout(() => {
        const response = detectIntent(message);
        appendMessage("bot", response);
    }, 500);
}

function appendMessage(sender, text) {
    const div = document.createElement("div");
    div.className = sender;
    div.textContent = (sender === "bot" ? "SENTRI: " : "Anda: ") + text;
    chatlog.appendChild(div);
    chatlog.scrollTop = chatlog.scrollHeight;
}

function detectIntent(text) {
    const lc = text.toLowerCase();
    if (lc.includes("slot") || lc.includes("togel") || lc.includes("judi")) {
        return "Lebih baik berinvestasi di reksa dana atau emas, daripada main judi online.";
    } else if (lc.includes("penipuan") || lc.includes("wa") || lc.includes("chat")) {
        return "Hati-hati! Jika ada chat mencurigakan, jangan langsung klik tautan atau transfer uang.";
    } else if (lc.includes("invest") || lc.includes("uang")) {
        return "Apakah kamu butuh saran investasi? Saya bisa bantu arahkan.";
    } else {
        return "Saya tidak begitu paham, bisa kamu jelaskan lebih lanjut?";
    }
}