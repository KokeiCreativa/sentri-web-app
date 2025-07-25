
function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatContainer = document.getElementById("chatContainer");
    const userText = userInput.value.trim();

    if (!userText) return;

    const userDiv = document.createElement("div");
    userDiv.textContent = "🧑‍💼 Anda: " + userText;
    chatContainer.appendChild(userDiv);

    const botDiv = document.createElement("div");
    const response = getBotResponse(userText);
    botDiv.textContent = "🤖 SENTRI: " + response;
    chatContainer.appendChild(botDiv);

    chatContainer.scrollTop = chatContainer.scrollHeight;
    userInput.value = "";
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("pinjaman")) return "Hati-hati dengan tawaran pinjaman online ilegal. Pastikan terdaftar di OJK.";
    if (input.includes("investasi")) return "Cek legalitas investasi di website resmi OJK atau SWI.";
    if (input.includes("togel") || input.includes("slot")) return "Aktivitas seperti togel dan slot termasuk ilegal. Hindari untuk keselamatan finansial Anda.";
    if (input.includes("halo") || input.includes("hai")) return "Halo! Ada yang bisa saya bantu tentang keuangan?";
    return "Maaf, saya belum mengerti maksud Anda. Silakan coba pertanyaan lain.";
}
