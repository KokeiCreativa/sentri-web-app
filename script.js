function toggleChatbot() {
  const chatbox = document.getElementById('chatbot-container');
  chatbox.style.display = (chatbox.style.display === 'none' || chatbox.style.display === '') ? 'block' : 'none';
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (message === '') return;

  const chatbox = document.getElementById('chatbox');
  const userMsg = document.createElement('p');
  userMsg.innerHTML = '<strong>Kamu:</strong> ' + message;
  chatbox.appendChild(userMsg);

  const reply = document.createElement('p');
  reply.innerHTML = '<strong>SENTRI:</strong> ' + getReply(message);
  chatbox.appendChild(reply);

  input.value = '';
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('investasi')) return 'Investasi penting, tapi pastikan legalitasnya ya!';
  if (msg.includes('pinjaman')) return 'Hindari pinjaman online ilegal. Cek OJK dulu!';
  if (msg.includes('halo') || msg.includes('hai')) return 'Hai juga! Ada yang ingin kamu tanyakan?';
  return 'Maaf, bisa ulangi? Saya masih belajar memahami semua pertanyaan.';
}