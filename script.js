const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userText = input.value.trim();
  if (userText === '') return;

  appendMessage('user', userText);
  input.value = '';

  const lowerText = userText.toLowerCase();
  const flaggedWords = ['slot', 'togel', 'pinjaman online', 'pinjol', 'scam', 'nft'];

  let detected = flaggedWords.find(word => lowerText.includes(word));

  if (detected) {
    appendMessage('bot', `⚠️ Kata "${detected}" terdeteksi. Harap berhati-hati terhadap aktivitas mencurigakan.`);
  } else {
    appendMessage('bot', `Terima kasih atas pesanmu!`);
  }
});

function appendMessage(sender, text) {
  const div = document.createElement('div');
  div.className = sender === 'user' ? 'user-message' : 'bot-message';
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}
