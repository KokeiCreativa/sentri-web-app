const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    const userDiv = document.createElement('div');
    userDiv.textContent = '👤: ' + message;
    chatbox.appendChild(userDiv);

    const suspiciousKeywords = ['slot', 'judi', 'togel', 'penipuan', 'scam'];
    const found = suspiciousKeywords.find(word => message.toLowerCase().includes(word));
    let botReply = '';

    if (found) {
        botReply = `⚠️ Peringatan: Pesan Anda terdeteksi mengandung kata mencurigakan terkait "${found}".`;
    } else {
        botReply = '🤖 SENTRI: Terima kasih atas pesan Anda! Fitur AI aktif di versi final.';
    }

    const botDiv = document.createElement('div');
    botDiv.textContent = botReply;
    chatbox.appendChild(botDiv);

    userInput.value = '';
    chatbox.scrollTop = chatbox.scrollHeight;
}
