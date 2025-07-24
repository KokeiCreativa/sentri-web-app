const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Kata kunci dan respons otomatis
const keywordResponses = {
    "pinjam": "🚫 Hati-hati terhadap pinjaman online ilegal. Pastikan penyedia terdaftar di OJK.",
    "pinjaman": "🚫 Hati-hati terhadap pinjaman online ilegal. Pastikan penyedia terdaftar di OJK.",
    "investasi": "💡 Waspada terhadap investasi bodong. Periksa legalitasnya di situs OJK.",
    "cepat": "⚠️ Hati-hati dengan tawaran uang cepat, bisa jadi modus penipuan.",
    "hadiah": "🎁 Hati-hati terhadap penipuan berkedok hadiah atau giveaway.",
    "online": "🔒 Jaga data pribadi saat menggunakan layanan keuangan online.",
    "uang": "💰 Kelola uang Anda dengan bijak dan hindari penawaran mencurigakan.",
    "judi": "🚫 Judi online adalah ilegal dan dapat merugikan secara finansial dan hukum.",
    "togel": "🚫 Togel adalah bentuk perjudian yang dilarang. Hindari agar tidak rugi.",
    "slot": "🚫 Permainan slot online seringkali menjebak dan merugikan.",
    "scam": "⚠️ Waspada terhadap scam, jangan mudah percaya dengan iming-iming uang.",
    "menang": "🎯 Penawaran menang tanpa ikut kompetisi bisa jadi penipuan.",
    "transfer": "🏦 Jangan asal transfer uang tanpa verifikasi yang jelas.",
    "ojk": "📌 Semua layanan keuangan resmi wajib terdaftar di OJK. Cek di www.ojk.go.id.",
    "penipuan": "🚨 Waspada terhadap segala bentuk penipuan. Verifikasi selalu informasi yang diterima.",
    "aman": "🔐 Pastikan semua transaksi dilakukan di platform yang aman dan terpercaya."
};

// Tampilkan pesan awal dari chatbot
function showInitialMessage() {
    const message = `
        <strong>SENTRI:</strong> 💡 Waspada terhadap penipuan berkedok hadiah.
    `;
    chatBox.innerHTML += `<p>${message}</p>`;
}

function addMessage(sender, text) {
    const message = `<strong>${sender}:</strong> ${text}`;
    chatBox.innerHTML += `<p>${message}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    let foundResponse = null;

    // Cek apakah salah satu kata kunci muncul dalam kalimat
    Object.keys(keywordResponses).forEach(keyword => {
        if (lowerMessage.includes(keyword)) {
            foundResponse = keywordResponses[keyword];
        }
    });

    return foundResponse || "Maaf, saya belum memahami maksud Anda. Coba dengan kata lain.";
}

sendButton.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (message === "") return;

    addMessage("Anda", message);

    const botResponse = getBotResponse(message);
    setTimeout(() => {
        addMessage("SENTRI", botResponse);
    }, 500);

    userInput.value = "";
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton.click();
    }
});

window.onload = showInitialMessage;
