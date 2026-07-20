const tanggalInput = document.getElementById('tanggal-perjalanan');
const tanggalWrap = document.getElementById('tanggal-perjalanan').parentElement;
const selesaiInput = document.getElementById('tanggal-selesai');
const selesaiWrap = document.getElementById('sampai-wrap');
const today = new Date().toISOString().split('T')[0];
tanggalInput.min = today;
selesaiInput.min = today;

function openPicker(input){
    if(input.showPicker){
        input.showPicker();
    } else {
        input.focus();
    }
}

tanggalWrap.addEventListener('click', () => openPicker(tanggalInput));
selesaiWrap.addEventListener('click', () => openPicker(selesaiInput));

tanggalInput.addEventListener('change', () => {
    if(tanggalInput.value){
        selesaiInput.min = tanggalInput.value;
        if(selesaiInput.value && selesaiInput.value < tanggalInput.value){
            selesaiInput.value = '';
        }
    }
    hitungDurasi();
});

selesaiInput.addEventListener('change', hitungDurasi);

function hitungDurasi(){
    if(!tanggalInput.value || !selesaiInput.value) return;

    const mulai = new Date(tanggalInput.value);
    const selesai = new Date(selesaiInput.value);
    const selisihHari = Math.round((selesai - mulai) / (1000 * 60 * 60 * 24));

    if(selisihHari < 0) return;

    const jumlahHari = selisihHari + 1;
    const jumlahMalam = selisihHari;

    let durasiLabel = document.getElementById('durasi-label');
    if(!durasiLabel){
        durasiLabel = document.createElement('p');
        durasiLabel.id = 'durasi-label';
        durasiLabel.className = 'durasi-info';
        document.querySelector('.rencana-form').insertAdjacentElement('afterend', durasiLabel);
    }
    durasiLabel.innerHTML = `<i class="fa-regular fa-clock"></i> Durasi perjalanan: <strong>${jumlahHari} Hari ${jumlahMalam} Malam</strong>`;
}