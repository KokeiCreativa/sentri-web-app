function mulaiKonsultasi() {
    document.getElementById('chatbox').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('userInput').focus();
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        kirimPesan();
    }
}

function kirimPesan() {
    const input = document.getElementById("userInput");
    const chatlog = document.getElementById("chatlog");
    const pesan = input.value.trim();
    if (!pesan) return;

    const balasan = deteksiDanBalas(pesan);
    chatlog.innerHTML += `<div><strong>Anda:</strong> ${pesan}</div>`;
    chatlog.innerHTML += `<div><strong>SENTRI:</strong> ${balasan}</div>`;
    input.value = "";
    chatlog.scrollTop = chatlog.scrollHeight;
}

function deteksiDanBalas(teks) {
    const kataTerlarang = ["judi", "slot", "togel", "penipuan"];
    const lower = teks.toLowerCase();
    for (const kata of kataTerlarang) {
        if (lower.includes(kata)) {
            return "⚠️ Aktivitas mencurigakan terdeteksi. Mohon berhati-hati.";
        }
    }
    if (lower.includes("pinjaman") || lower.includes("investasi")) {
        return "📘 Tips: Pastikan lembaga pinjaman/investasi terdaftar di OJK.";
    }
    return "🤖 Terima kasih! Pertanyaan Anda sedang diproses.";
}
