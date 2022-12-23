"use strickt";

if (window.matchMedia('screen and (max-width: 1800px)').matches) {
    document.getElementById('streaming1').textContent = "Yandex Music — музыкальный стриминговый сервис, разработанный Яндексом.";
    document.getElementById('streaming2').textContent = "Apple Music — музыкальная служба, представленная компанией Apple.";
    document.getElementById('streaming3').textContent = "Spotify — самый популярный стриминговый сервис с музыкой, аудиокнигами и подкастами.";
}
else{
    document.getElementById('streaming1').textContent = "Yandex Music — российский музыкальный стриминговый сервис, разработанный Яндексом. Самая популярная функция Яндекс.Музыки — умные плейлисты.";
    document.getElementById('streaming2').textContent = "Apple Music — музыкальная служба, представленная компанией Apple, предоставляющая доступ к миллионам композиций из библиотеки iTunes Store.";
    document.getElementById('streaming3').textContent = "Spotify — самый популярный стриминговый сервис, позволяющий легально прослушивать музыкальные композиции, аудиокниги и подкасты.";
};

function search_overlay_1(){
    document.getElementsByClassName('search-overlay')[0].style.display = 'flex'
    document.getElementsByTagName('main')[0].style.filter = 'blur(2px) brightness(50%)'
    document.getElementsByTagName('main')[0].style.pointerEvents = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    document.getElementsByClassName('CloseSearchButton')[0].style.visibility = 'visible'
};

function search_overlay_2(){
    document.getElementsByClassName('search-overlay')[0].style.display = 'none'
    document.getElementsByTagName('main')[0].style.filter = 'none'
    document.getElementsByTagName('main')[0].style.pointerEvents = 'all'
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
    document.getElementsByClassName('CloseSearchButton')[0].style.visibility = 'hidden'
};

function goingoutside() {
    if (!confirm("Вы согласны перейти на внешний ресурс?")) {
        alert("Вы не покинули страницу");
        event.preventDefault();
    }
}