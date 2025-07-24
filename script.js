// ============ RESPONS PERTANYAAN DASAR ============ //
function getBotResponse(input) {
    input = input.toLowerCase();

    // Jawaban spesifik
    if (input.includes("halo") || input.includes("hai") || input.includes("hello")) {
        return "Halo! Ada yang bisa saya bantu terkait keuangan digital?";
    } else if (input.includes("apa itu sentri")) {
        return "SENTRI adalah asisten digital untuk membantu masyarakat memahami dan menjaga keamanan keuangan digital.";
    } else if (input.includes("terima kasih") || input.includes("makasih")) {
        return "Sama-sama! Jangan ragu untuk bertanya lagi ya.";
    }

    // Default fallback
    return "Maaf, saya belum memahami pertanyaan itu. Bisa coba ketik dengan kata yang berbeda?";
}

// ============ FITUR DETEKSI KATA-KATA BERBAHAYA ============ //
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
⚠️ Peringatan: Kami mendeteksi kata kunci yang berpotensi terkait aktivitas berisiko seperti judi, penipuan, atau investasi ilegal.

📢 Waspadalah terhadap tawaran uang cepat atau penghasilan instan.

📞 Jika Anda merasa terjebak atau butuh bantuan, Anda bisa melaporkan:
➡️ WhatsApp OJK di: https://wa.me/628115715715
➡️ Telepon 157 (OJK) atau 1500-655 (BI)
    `;
}

// ============ FUNGSI UTAMA UNTUK MENGOLAH INPUT ============ //
function getFinalBotResponse(input) {
    if (deteksiKataSensitif(input)) {
        return tanggapanDeteksiKata();
    } else {
        return getBotResponse(input);
    }
}

// ============ INTERAKSI DENGAN UI ============ //
function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Tampilkan pesan pengguna
    let chatContainer = document.getElementById("chat-container");
    chatContainer.innerHTML += `<div class="chat user">${userInput}</div>`;

    // Dapatkan respon dari bot
    let botResponse = getFinalBotResponse(userInput);
    chatContainer.innerHTML += `<div class="chat bot">${botResponse.replace(/\n/g, "<br>")}</div>`;

    // Scroll ke bawah
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Kosongkan input
    document.getElementById("user-input").value = "";
}
