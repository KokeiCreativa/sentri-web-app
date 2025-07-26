
function kirimWA() {
  window.open('https://wa.me/6281234567890', '_blank');
}
function kirimTelegram() {
  window.open('https://t.me/usernameAnda', '_blank');
}
document.getElementById('kontakForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Pesan berhasil dikirim!');
});
