// Цикл для вопроса про регистрацию
var result;

while(true)
{
    result = prompt("Желаете пройти регистрацию на сайте?");

    if (result == "Да")
    {
        alert("Круто!");
        break;
    }
    else
    {
        alert("Попробуйте еще раз");
    }
};

// Цикл для прохожденияя регистрации
function Input(){
    let login_ok = false;
    let user_name = "";
    let password = "";

    user_name = prompt("Логин","");
    if (user_name == "Админ")
    {
        password = prompt("Пароль","");
        if (password == "Я главный"){
            alert("Здравствуйте");
        }
        else if (password == null){
            alert("Отменено");
        }
        else{
            alert("Неверный пароль");
        }
    }
    else if (user_name == "" || user_name == null){
        alert("Отменено");
    }
    else{
        alert("Я вас не знаю");
    }

};



// Функционал кнопки лайка
var isCliked = false;
var counters = document.getElementById('count');
var button = document.getElementById('button');
var heart = document.getElementById('heart');

var like_count = Number(counters.textContent);

function draw_cursor (e) {
    heart.style.position = "absolute";
    heart.style.backgroundColor = "transparent"; 
    heart.style.width = "2%";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    let img = heart.cloneNode(true);
    img.removeAttribute('id');
    img.classList.add('fordel');
    document.body.append(img);   
};
function remove_hearts(){
    var del = document.getElementsByClassName('fordel');

    while(del.length > 0 ){
        document.removeEventListener('mousemove', draw_cursor);
        del[0].remove();
    }
};

function btn_clik (){
    document.addEventListener('mousemove', draw_cursor);

    if (isCliked){
        isCliked = false;
        like_count -= 1;
        counters.textContent = like_count;

        heart.style.position = "static";
        heart.style.width = "25%";
        heart.style.backgroundColor = "transparent";
        remove_hearts();

        button.classList.remove('clicked');
    }
    else{  
        heart.style.backgroundColor = "#e73c7e";
        button.classList.add('clicked');
        button.style.zIndex = "100"; 
        like_count += 1;
        counters.textContent = like_count;
        isCliked = true;
    }
};

function search_overlay_1(){
    document.getElementsByClassName('search-overlay')[0].style.display = 'flex'
    document.getElementsByClassName('scroll')[0].style.filter = 'blur(2px) brightness(50%)'
    document.getElementsByClassName('scroll')[0].style.pointerEvents = 'none'
    document.getElementsByTagName('main')[0].style.filter = 'blur(2px) brightness(50%)'
    document.getElementsByTagName('main')[0].style.pointerEvents = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    document.getElementsByClassName('CloseSearchButton')[0].style.visibility = 'visible'
};

function search_overlay_2(){
    document.getElementsByClassName('search-overlay')[0].style.display = 'none'
    document.getElementsByClassName('scroll')[0].style.filter = 'none'
    document.getElementsByClassName('scroll')[0].style.pointerEvents = 'all'
    document.getElementsByTagName('main')[0].style.filter = 'none'
    document.getElementsByTagName('main')[0].style.pointerEvents = 'all'
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
    document.getElementsByClassName('CloseSearchButton')[0].style.visibility = 'hidden'
};