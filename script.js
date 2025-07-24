function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("halo") || input.includes("hai")) {
        return "Halo! Ada yang bisa saya bantu terkait keuangan digital?";
    } else if (input.includes("apa itu sentri")) {
        return "SENTRI adalah asisten digital untuk membantu masyarakat memahami dan menjaga keamanan keuangan digital.";
    } else if (input.includes("terima kasih") || input.includes("makasih")) {
        return "Sama-sama! Jangan ragu untuk bertanya lagi ya.";
    }

    return "Maaf, saya belum memahami pertanyaan itu. Bisa coba ketik dengan kata yang berbeda?";
}

const kataSensitif = [
    "uang online", "slot", "togel", "judi", "penipuan", "pinjaman bodong",
    "kredit online ilegal", "scam", "phising", "investasi bodong"
];

function deteksiKataSensitif(input) {
    for (let kata of kataSensitif) {
        if (input.toLowerCase().includes(kata)) {
            return true;
        }
    }
    return false;
}

function tanggapanDeteksiKata() {
    return `
⚠️ Peringatan: Kami mendeteksi kata yang berisiko seperti judi, penipuan, atau investasi bodong.<br><br>
📢 Hindari aktivitas ilegal. Jika Anda butuh bantuan:<br>
✅ WhatsApp OJK: <a href="https://wa.me/628115715715" target="_blank">Klik di sini</a><br>
✅ Kontak OJK 157 atau BI 1500-655.
`;
}

function getFinalBotResponse(input) {
    if (deteksiKataSensitif(input)) {
        return tanggapanDeteksiKata();
    } else {
        return getBotResponse(input);
    }
}

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    let chatContainer = document.getElementById("chat-container");
    chatContainer.innerHTML += `<div class="chat user">${userInput}</div>`;

    let botResponse = getFinalBotResponse(userInput);
    chatContainer.innerHTML += `<div class="chat bot">${botResponse}</div>`;

    chatContainer.scrollTop = chatContainer.scrollHeight;
    document.getElementById("user-input").value = "";
}
