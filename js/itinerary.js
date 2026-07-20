let dayCount = document.querySelectorAll('.day-tab').length;

document.getElementById('btn-tambah-hari').addEventListener('click', () => {

    dayCount++;

    const newDayId = 'day-' + dayCount;
    const newTab = document.createElement('button');
    newTab.className = 'day-tab';
    newTab.dataset.day = newDayId;
    newTab.innerHTML = `
        <span>Hari ${dayCount}</span>
        <small>Hari ke-${dayCount}</small>
    `;

    attachDayTabEvents(newTab);

    const addBtn = document.getElementById('btn-tambah-hari');
    addBtn.parentNode.insertBefore(newTab, addBtn);

    const newContent = document.createElement('div');
    newContent.className = 'day-content';
    newContent.id = newDayId;

    newContent.innerHTML = `
        <div class="timeline"></div>

        <p style="color:#999;font-size:13px;padding:10px 0 0;">
            Belum ada aktivitas di hari ini.
            Klik "Tambah Aktivitas" untuk mulai menambahkan.
        </p>
    `;

    document.getElementById('tab-itinerary')
        .insertBefore(newContent, document.getElementById('btn-tambah-aktivitas'));

    document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.day-content').forEach(c => c.classList.remove('active'));

    newTab.classList.add('active');
    newContent.classList.add('active');

});