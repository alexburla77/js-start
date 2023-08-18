'use strict';

//Переменные 

//Имя переменной может состоять из букв, цифр, нижнего подчеркивания и символа доллара
// первый символ не должен быть цифрой
// названия переменных не должны повторять зарезервированные слова в языке alert, prompt



//Типы данных
//Обьект это коллекция данных
//Обьекты могут содержать свойсва и методы
//Массив это частный случай обьекта
//Массивы это комплексные типы данных и могут включать любые другие типы данных


// let obj = {
//   name: 'Alex',
//   age: 22,
//   isMarried: false,
//   arr: [6, {}, 'num']
// };

// console.log(obj.name);
// console.log(obj['name']);

// const arr = ['plum.jpg', 'orange.png', 'apple.png', {}, []];
// console.log(arr[0]);

// const num = Number.MIN_SAFE_INTEGER;
// console.log(num +3);



// Синтаксические возможности обьектов

// const arrObj = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
//   q: 'bbb',
// };

// arrObj['f'] = 'ddd';

// console.log(arrObj['f']);
// console.log(arrObj.f);
// console.log(arrObj);


//Общение с пользователем alert, prompt, confirm

// alert('Hello');
// const result = confirm('Are you here?');
// console.log(result);
// const answer = prompt('Вам есть 18?', '18');

// const arr = [];
// arr[0] = prompt('Как ваше имя?', '');
// arr[1] = prompt('Как ваша фамилия?', '');
// arr[2] = prompt('Сколько вам лет?', '');
// document.write(arr);


//Оператор typeof
// console.log(typeof(null)); Будет тип object 
//Это официально признанная ошибка
// console.log(typeof(function(){}));



//Интерполяция  
//Шаблонные строки
// const cat = 'toys';
// console.log(`https//someurl.com/${cat}/5`);



//Операторы в js

// console.log(10 + 'str');
// console.log(5 + +'3');
// let incr = 10,
//     decr = 10;
// incr++;
// decr--;
// console.log(incr, decr);

