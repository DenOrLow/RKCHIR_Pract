var captcha;
function generate() {
    var uniquechar = "";
    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    document.getElementById("submit").value = "";
 
    captcha = document.getElementById("image");
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
    captcha.innerHTML = uniquechar;
}

function checkEmpty() {
    if (!document.getElementById("submit").value)
{
    alert('Пустой вввод');
}
}

function printmsg() {
    var sh_h = document.getElementById('check-c');
    var firstCaptcha=document.getElementById('image');
    var firstCaptchainput=document.getElementById('user-input');
    var firstCaptchaBTN=document.getElementById('btn');
    var LoginBTN=document.getElementById('login-btn');


    const usr_input = document
        .getElementById("submit").value;
    if (!document.getElementById("submit").value)
    {
        alert('Пустой вввод');
    }
while (true) {
    if (usr_input == captcha.innerHTML) {
        var s = document.getElementById("key")
        generate();
        LoginBTN.style.background = "rgb(255, 0, 0)";
        LoginBTN.style.cursor = "pointer";
        return false;
    }
    else if(usr_input != captcha.innerHTML){
        var s = document.getElementById("key")
        sh_h.classList.add('show-block');
        firstCaptcha.classList.add('remove-block')
        firstCaptchainput.classList.add('remove-block')
        firstCaptchaBTN.classList.add('remove-block')
        return false;
    }
    else {
        var s = document.getElementById("key")
        generate();
        return false;
    }
}
}

let input_val=document.getElementById('input_val');
let num1 = document.getElementById('num1');
let num2= document.getElementById('num2');

const myBtn=document.getElementById('btn1');

num1.innerText=Math.floor(Math.random()*10);
num2.innerText=Math.floor(Math.random()*10);

let number1=num1.innerText;
let number2=num2.innerText;

myBtn.addEventListener("click", ()=>{

    let sum_result = parseInt(number1)+parseInt(number2);
    var LoginBTN=document.getElementById('login-btn');
    
    let res = parseInt(input_val.value)
    if (!document.getElementById("input_val").value)
    {
        alert('Пустой вввод');
    }
    if(res==sum_result){
        var s = document.getElementById("key")
        LoginBTN.style.background = "rgb(255, 0, 0)";
        LoginBTN.style.cursor = "pointer";
    }
});


//Корзина
function Sum(startingValue) {
    this.value = startingValue;

    this.addInput = function() {
        this.value += +prompt('Введите число, которое хотите добавить', "0");
    };

    this.showValue = function() {
        alert(this.value);
    };
};

function summator(){
    var adder = new Sum(0);
    adder.addInput();
    adder.addInput();
    adder.addInput();
    adder.showValue();
};
//-=========================-

//Сокращение текста
function truncate(str, maxlength){
    if (str.length > maxlength){
        return str.slice(0, maxlength) + "...";
    }
    return str;
};

let str = document.getElementById("text");
let button = document.getElementById("textbutton");

button.addEventListener("click",() => {
    str.textContent = truncate(str.textContent, 10);
});
//-===================================================-