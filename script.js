const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Kata kunci berbahaya yang akan memicu peringatan otomatis
const keywordList = ["slot", "togel", "pinjaman ilegal", "judi", "chip", "qq", "duit cepat", "tusuk", "bocoran", "deposit"];

// Balasan bot default
function getBotResponse(input) {
  input = input.toLowerCase();

  if (keywordList.some(keyword => input.includes(keyword))) {
    return "⚠️ Peringatan: Aktivitas tersebut berisiko penipuan atau termasuk judi online. Harap hindari demi keamanan keuangan Anda. Jika perlu bantuan, hubungi kami via WhatsApp.";
  }

  if (input.includes("halo") || input.includes("hai")) return "Halo! Saya SENTRI, asisten keuangan digital Anda. Ada yang bisa saya bantu?";
  if (input.includes("investasi")) return "Investasi adalah cara menumbuhkan uang. Pastikan pilih yang legal, terdaftar OJK.";
  if (input.includes("pinjaman")) return "Selalu pastikan pinjaman berasal dari lembaga resmi, bukan pinjol ilegal.";
  if (input.includes("wa") || input.includes("whatsapp")) return "Hubungi kami langsung via WhatsApp di: https://wa.me/6281234567890";

  return "Maaf, saya belum mengerti maksud Anda. Bisa dijelaskan lagi?";
}

function appendMessage(sender, message) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = message;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = userInput.value.trim();
  if (input === "") return;

  appendMessage("user", input);
  const response = getBotResponse(input);
  setTimeout(() => appendMessage("bot", response), 500);

  userInput.value = "";
}
