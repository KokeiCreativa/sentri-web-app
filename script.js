function deteksi() {
  const input = document.getElementById('input-text').value.toLowerCase();
  const hasil = document.getElementById('hasil');
  const kataKunci = ['judi', 'togel', 'slot', 'pinjaman ilegal', 'scam'];
  const terdeteksi = kataKunci.filter(kata => input.includes(kata));

  if (terdeteksi.length > 0) {
    hasil.textContent = '⚠️ Peringatan: ditemukan kata mencurigakan - ' + terdeteksi.join(', ');
    hasil.style.color = 'red';
    hasil.style.backgroundColor = '#ffe5e5';
    hasil.style.border = '1px solid red';
  } else {
    hasil.textContent = '✅ Tidak ditemukan indikasi mencurigakan.';
    hasil.style.color = 'green';
    hasil.style.backgroundColor = '#e5ffe5';
    hasil.style.border = '1px solid green';
  }
}
