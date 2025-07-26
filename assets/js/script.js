
function sendMessage() {
  const input = document.getElementById('user-input');
  const log = document.getElementById('chat-log');
  const message = input.value.trim();
  if (!message) return;

  log.innerHTML += "<div><strong>Anda:</strong> " + message + "</div>";
  input.value = "";

  const keywords = ['togel', 'slot', 'penipuan', 'judi'];
  let response = "Terima kasih atas pertanyaannya.";

  for (let keyword of keywords) {
    if (message.toLowerCase().includes(keyword)) {
      response = "⚠️ Deteksi aktivitas mencurigakan terkait '" + keyword + "'. Harap waspada.";
      break;
    }
  }

  setTimeout(() => {
    log.innerHTML += "<div><strong>SENTRI:</strong> " + response + "</div>";
  }, 500);
}
