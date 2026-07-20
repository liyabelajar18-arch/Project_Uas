const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
});
function attachDayTabEvents(dayTab){
    dayTab.addEventListener('click', () => {

        document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.day-content').forEach(c => c.classList.remove('active'));

        dayTab.classList.add('active');

        const target = document.getElementById(dayTab.dataset.day);

        if(target){
            target.classList.add('active');
        }

    });
}

document.querySelectorAll('.day-tab').forEach(attachDayTabEvents);