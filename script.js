
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const alertBox = document.getElementById("alert");

function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    const msg = document.createElement("div");
    msg.textContent = "Anda: " + text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Deteksi kata kunci negatif
    const forbidden = ["judi", "togel", "slot", "penipuan"];
    const found = forbidden.find(kata => text.toLowerCase().includes(kata));
    if (found) {
        alertBox.textContent = "⚠️ Peringatan: Kata "" + found + "" terdeteksi! Harap gunakan chatbot secara bijak.";
    } else {
        alertBox.textContent = "";
    }

    userInput.value = "";
}
