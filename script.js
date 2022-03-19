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
    prcntBtn = document.querySelector('.sqrt');


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
      btn0 = document.querySelector('.zero');


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

// операции
//=======================================================//

plusBtn.addEventListener('click', function(event) {
    event.preventDefault();
    result.value = +a.value + +b.value;
});

minusBtn.addEventListener('click', function(event) {
    event.preventDefault();
    result.value = +a.value - +b.value;
});

multipleBtn.addEventListener('click', function(event) {
    event.preventDefault();
    result.value = +a.value * +b.value;
});

divisionBtn.addEventListener('click', function(event) {
    event.preventDefault();
    result.value = +a.value / +b.value;
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

prcntBtn.addEventListener('click', function(event) {
    event.preventDefault();
   
    
});



// кнопки цифр
//=======================================================//


// 1
//=======================================================//

btn1.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += '1';
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += '1';
        } 
    }  
});

// 2
//=======================================================//


btn2.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += '2';
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += '2';
        } 
    }  
});


// 3
//=======================================================//

btn3.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += '3';
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += '3';
        } 
    }  
});

// 4
//=======================================================//

btn4.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += '4';
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += '4';
        } 
    }  
});

// 5
//=======================================================//

btn5.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += '5';
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += '5';
        } 
    }  
});

// 6
//=======================================================//

btn6.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += '6';
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += '6';
        } 
    }  
});

// 7
//=======================================================//

btn7.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += '7';
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += '7';
        } 
    }  
});

// 8
//=======================================================//

btn8.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += '8';
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += '8';
        } 
    }  
});

// 9
//=======================================================//

btn9.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += '9';
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += '9';
        } 
    }  
});

// 0
//=======================================================//

btn0.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (a.classList.contains('active')) {
       
        if (a.value.length >= 10) {
            console.log('много символов')
        } else {
            a.value += '0';
        } 
        
    } else {
         if (b.value.length >= 10) {
            console.log('много символов')
        } else {
            b.value += '0';
        } 
    }  
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

