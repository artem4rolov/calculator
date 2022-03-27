"use strict";

// переменные
//=======================================================//

const a = document.querySelector('.first'),
      b = document.querySelector('.second'),
      result = document.querySelector('.result'),
      label = document.querySelector('.operator');

// кнопки операций
//=======================================================//

const plusBtn = document.querySelector('.plus'),
      minusBtn = document.querySelector('.minus'),
      multipleBtn = document.querySelector('.multiple'),
      divisionBtn = document.querySelector('.division'),
      clearBtn = document.querySelector('.clear'),
      squareBtn = document.querySelector('.square'),
      sqrtBtn = document.querySelector('.sqrt'),
      delBtn = document.querySelector('.delete'),
      
      logBtn = document.querySelector('.log'),
      cosinusBtn = document.querySelector('.cosinus'),
      sinusBtn = document.querySelector('.sinus'),
      piBtn = document.querySelector('.pi');

// Элементы для открытия дополнительных кнопок
//=======================================================//

const container = document.querySelector('.container'),
      moreDownBtn = document.querySelector('.more'),
      moreUpBtn = document.querySelector('#more_btn_up'),
      moreBtns = document.querySelector('#more__buttons_div'),
      header = document.querySelector('.header');
      

// кнопки чисел
//=======================================================//

const btn1 = document.querySelector('.one'),
      btn2 = document.querySelector('.two'),
      btn3 = document.querySelector('.three'),
      btn4 = document.querySelector('.four'),
      btn5 = document.querySelector('.five'),
      btn6 = document.querySelector('.six'),
      btn7 = document.querySelector('.seven'),
      btn8 = document.querySelector('.eight'),
      btn9 = document.querySelector('.nine'),
      btn0 = document.querySelector('.zero'),
      btn00 = document.querySelector('.double_zero');

// меню
//=======================================================//

const settingsBtn = document.querySelector('.settings'),
      menuDiv = document.querySelector('.menu'),
      themeBtn = document.querySelector('#themeBtn'),
      themeDiv = document.querySelector('.theme'),
      themeBtns = document.querySelectorAll('.theme_btns'),
      
      redTheme = document.querySelector('#red'),
      greenTheme = document.querySelector('#green'),
      neonTheme = document.querySelector('#neon'),
      blackTheme = document.querySelector('#black');



// comma (запятая)
//=======================================================//     

const btnComma = document.querySelector('.comma');

// проверка выбора поля ввода
//=======================================================//

a.onfocus = function() {
    a.classList.add('active');
    b.classList.remove('active');
}

b.onfocus = function() {
    b.classList.add('active');
    a.classList.remove('active');
}

a.onfocus();

// операции
//=======================================================//

plusBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.value === '' || b.value === '') {
        alert('Введите числа в поля!')
    } else {
        result.value = +a.value + +b.value;
    }
    
});

minusBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.value === '' || b.value === '') {
        alert('Введите числа в поля!')
    } else {
        result.value = +a.value - +b.value;
    }
    
});

multipleBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.value === '' || b.value === '') {
        alert('Введите числа в поля!')
    } else {
        result.value = +a.value * +b.value;
    }
    
});

divisionBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.value === '' || b.value === '') {
        alert('Введите числа в поля!')
    } else {
        result.value = +a.value / +b.value;
    }
    
});

clearBtn.addEventListener('click', function(event) {
    event.preventDefault();
    result.value = "";
    a.value = "";
    b.value = "";
});

squareBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    result.value = a.value**2;
    b.value = "";
});

sqrtBtn.addEventListener('click', function(event) {
    event.preventDefault();
    result.value = Math.sqrt(+a.value);
    b.value = "";
});

delBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
     if (a.classList.contains('active')) {  
       a.value =  a.value.substring(0, a.value.length - 1);
    } else {
       b.value =  b.value.substring(0, b.value.length - 1);
    }  
    
});


// ДОПОЛНИТЕЛЬНЫЕ операции
//=======================================================//

logBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
     if (a.classList.contains('active')) {
         if (a.value === '') {
             alert('Введите число!')
         } else {
             a.value =  Math.log(+a.value);
         }
    } else {
        if (b.value === '') {
             alert('Введите число!')
         } else {
             b.value =  Math.log(+a.value);
         }
    }  
    
});

// кнопки цифр
//=======================================================//

function addNumberOnButton(num) {
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += num;
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += num;
        } 
    }  
}

// 1
//=======================================================//

btn1.addEventListener('click', function(event) {
    event.preventDefault();
    addNumberOnButton('1');
});

// 2
//=======================================================//


btn2.addEventListener('click', function(event) {
    event.preventDefault();
    addNumberOnButton('2');
});


// 3
//=======================================================//

btn3.addEventListener('click', function(event) {
    event.preventDefault();
    addNumberOnButton('3');
});

// 4
//=======================================================//

btn4.addEventListener('click', function(event) {
    event.preventDefault();
    addNumberOnButton('4');
});

// 5
//=======================================================//

btn5.addEventListener('click', function(event) {
    event.preventDefault();
    addNumberOnButton('5');
});

// 6
//=======================================================//

btn6.addEventListener('click', function(event) {
    event.preventDefault();
    addNumberOnButton('6');
});

// 7
//=======================================================//

btn7.addEventListener('click', function(event) {
    event.preventDefault();
    addNumberOnButton('7');
});

// 8
//=======================================================//

btn8.addEventListener('click', function(event) {
    event.preventDefault();
    addNumberOnButton('8');
});

// 9
//=======================================================//

btn9.addEventListener('click', function(event) {
    event.preventDefault();
    addNumberOnButton('9');
});

// 0
//=======================================================//

btn0.addEventListener('click', function(event) {
    event.preventDefault();
    addNumberOnButton('0'); 
});

// 00
//=======================================================//

btn00.addEventListener('click', function(event) {
    event.preventDefault();
    addNumberOnButton('00');  
});

// comma (запятая)
//=======================================================//

btnComma.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += '.';
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += '.';
        } 
    }  
});

// More BUTTON
//=======================================================//

moreDownBtn.addEventListener('click', () => {
    container.style.height = '370px';
    moreDownBtn.classList.add('hidden_div');
    moreUpBtn.classList.remove('hidden_div');
    moreBtns.classList.remove('hidden_div');
});

moreUpBtn.addEventListener('click', () => {
    container.style.height = '320px';
    moreDownBtn.classList.remove('hidden_div');
    moreUpBtn.classList.add('hidden_div');
    moreBtns.classList.add('hidden_div');
});

// Menu
//=======================================================//

settingsBtn.addEventListener('click', () => {
    event.preventDefault();
    
    settingsBtn.classList.toggle('settings_enable');
    
    if (settingsBtn.classList.contains('settings_enable')) {
        menuDiv.classList.remove('hidden_div');
        container.classList.add('blur');
        
        // Theme-menu
        //=======================================================//
        
        themeBtn.addEventListener('click', () => {
           themeDiv.classList.toggle('hidden_div'); 
        });
        
    } else {
        menuDiv.classList.add('hidden_div'); 
        container.classList.remove('blur');
        
        // Theme-menu
        //=======================================================//
        themeBtn.addEventListener('click', () => {
           themeDiv.classList.toggle('hidden_div'); 
        });
    }
    
});

// Change themeColor

function changeThemeColor(firstParam, secondParam, colorOne, colorTwo, colorThree) {
    themeBtns.forEach((item) => {
        item.classList.remove('active_theme');
    });
    
    event.target.classList.toggle('active_theme');
    
    plusBtn.style.background = firstParam;
    minusBtn.style.background = firstParam;
    plusBtn.style.background = firstParam,
    minusBtn.style.background = firstParam,
    multipleBtn.style.background = firstParam,
    divisionBtn.style.background = firstParam,
    clearBtn.style.background = secondParam,    
    squareBtn.style.background = firstParam,
    sqrtBtn.style.background = firstParam,
    delBtn.style.background = firstParam,
    logBtn.style.background = firstParam,
    cosinusBtn.style.background = firstParam,
    sinusBtn.style.background = firstParam,
    piBtn.style.background = firstParam,
    moreDownBtn.style.background = secondParam,  
    moreUpBtn.style.background = secondParam,  
    moreBtns.style.background = secondParam, 
    menuDiv.style.background = secondParam,  
    themeDiv.style.background = firstParam,  

    header.classList.add(colorOne);  
    header.classList.remove(colorTwo);
    header.classList.remove(colorThree);
    
}

redTheme.addEventListener('click', (event) => {
    event.preventDefault();
    
    changeThemeColor('#B72E3E', '#9F0013', 'red', 'green', 'black');
});

greenTheme.addEventListener('click', (event) => {
    event.preventDefault();
    
    changeThemeColor('#7AB02C', '#5A9800', 'green', 'red', 'black');
});

neonTheme.addEventListener('click', (event) => {
    event.preventDefault();
    
    changeThemeColor(null, null, 'green', 'red', 'black');
});

blackTheme.addEventListener('click', (event) => {
    event.preventDefault();
    
    changeThemeColor('#585858', '#424242', 'black', 'red', 'green');
});
