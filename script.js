const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

const kataTerlarang = [
  "slot", "togel", "penipuan", "scam", "fraud", "judi", "dukun", "chip", "hack",
];

function tampilkanPesan(pengirim, pesan) {
  const pesanElem = document.createElement("div");
  pesanElem.classList.add("pesan", pengirim);
  pesanElem.innerText = pesan;
  chatBox.appendChild(pesanElem);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function cekKataTerlarang(teks) {
  const teksLower = teks.toLowerCase();
  return kataTerlarang.some(kata => teksLower.includes(kata));
}

sendButton.addEventListener("click", () => {
  const pesan = userInput.value.trim();
  if (pesan === "") return;

  tampilkanPesan("user", pesan);

  if (cekKataTerlarang(pesan)) {
    setTimeout(() => {
      tampilkanPesan("bot", "⚠️ Kami mendeteksi kata yang tidak diperbolehkan. Harap hindari konten terkait penipuan atau judi.");
    }, 500);
  } else {
    setTimeout(() => {
      tampilkanPesan("bot", "Terima kasih. Pesan Anda telah kami terima.");
    }, 500);
  }

  userInput.value = "";
});
