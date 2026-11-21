function pilihRasa(rasa){
  const harga = rasa === 'Original' ? '15.000' : rasa === 'Pedas Balado' ? '17.000' : '18.000';
  document.getElementById('rasa').value = rasa + ' - Rp ' + harga;
}

function pesanWA(){
  const nama = document.getElementById('nama').value || 'Kak';
  const rasa = document.getElementById('rasa').value;
  const jumlah = document.getElementById('jumlah').value;
  const pesan = `Halo, saya ${nama} mau pesan Keripik Lokal ${rasa} sebanyak ${jumlah} pcs.`;
  document.getElementById('hasil').innerText = pesan;
  // 6282156457830
  window.open(`https://wa.me/6282156457830?text=${encodeURIComponent(pesan)}`, '_blank');
}