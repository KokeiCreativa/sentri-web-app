
const kataTerlarang = ["togel", "slot", "judi", "penipuan", "scam", "fraud"];

function deteksi() {
    const input = document.getElementById("inputText").value.toLowerCase();
    const peringatan = document.getElementById("peringatan");
    const audio = new Audio("assets/audio/peringatan.mp3");
    const ditemukan = kataTerlarang.find(kata => input.includes(kata));
    if (ditemukan) {
        peringatan.innerText = `Peringatan: Kata mencurigakan terdeteksi - "${ditemukan}"`;
        audio.play();
    } else {
        peringatan.innerText = "Tidak ditemukan aktivitas mencurigakan.";
    }
}

function chat() {
    const userInput = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");
    let jawaban = "Terima kasih. Kami akan bantu edukasi Anda lebih lanjut.";
    if (userInput.toLowerCase().includes("apa itu sentri")) {
        jawaban = "SENTRI adalah aplikasi untuk mendeteksi aktivitas keuangan ilegal dan edukasi digital.";
    }
    chatbox.innerHTML += `<p><strong>Anda:</strong> ${userInput}</p>`;
    chatbox.innerHTML += `<p><strong>SENTRI:</strong> ${jawaban}</p>`;
    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}
