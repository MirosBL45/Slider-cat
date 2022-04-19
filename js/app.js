document.addEventListener('DOMContentLoaded', ()=> {
    let okolo = document.getElementById('omotac');
    let gornjiSloj = okolo.querySelector('.gornji');
    let rucka = okolo.querySelector('.drska');
    let nakrivo = 0;
    let raz = 0;

    if (okolo.className.indexOf('iskrivljen') != -1) {
        nakrivo = 1000;
    }

    okolo.addEventListener('mousemove', (ev)=> {
        raz = (ev.clientX - window.innerWidth / 2) * 0.5;
        rucka.style.left = ev.clientX + raz + 'px';
        gornjiSloj.style.width = ev.clientX + nakrivo + raz + 'px';
    })
});