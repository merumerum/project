"use strict";

// // a = 25;
// // console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 17;
// console.log(number);

// const obj = {
//   a: 50
// };

// obj.a = 20;

// console.log(obj.a);

// console.log(name);
// var name = 'Meru';

// {
//   var result = 50;
// }

// console.log(result);


// // Типы данных

// let _number = 4.6;

// console.log(-4 / 0); //infinity
// console.log('name' * 10); //NaN

// const persone = '5'; //string

// const bool = true; 

// // console.log(lips); //null

// let ant;
// console.log(ant); //underfined

// //ОБЪЕКТЫ:

// const _obj = {
//   name: 'Alex', //name - ключ, alex - значение
//   age: 25,
//   isMarried: false    //свойства объекта
// };

// // console.log(obj.name);
// console.log(obj['age']);
//               //  0            1        2   3   4
// let arr = ['plum.png', 'orange.jpg', 6, {}, []];
// console.log(arr[0]);



// const arr2 = ['a', 'b', 'c'];

// arr2[10] = 'www';

// console.log(arr2);

// const arrObj = {
//   a: 'a',
//   '1': 'b',
//   2: 'c',
//   abc: {
//     def: {
//       ab: [{}, {}]
//     }
//   }
// };

// const b = 'b';

// // arrObj.b = 'qqq';  //обращаемся
// arrObj[b] = 'qqq'; 

// // console.log(arr2[1]);
// console.log(arrObj['b']);
// console.log(arrObj.b);

// // const obj2 = { a: 1, b: 2 };
// const obj2 = {
//   'Anna': 500,
//   Alice: 800
// };


// const exp = {
//   first: 12,
//   second: 13
// };

// const b = 'third';
// exp[b] = 14;

// console.log(exp.third);


// const storeName = 'Duken';

// const storeDescription = {
//     budget: 10000,
//     employees: ['Alex', 'Ivan', 'Dmitry'],
//     products: {
//         snickers: 200,
//         kitkat: 300
//     },
//     open: true
// };


// alert('Hello');

// const result = confirm('Are you here?'); 
// console.log(result);


// const answer = +prompt('Вам есть 18?', '');
// console.log(answer + 5);                    

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// // document.write(answers);

// console.log(typeof (answers));
// console.log(typeof (null));

// const category = 'toys';

// // console.log('https://someurl.com/' + category + '/' + '4');

// console.log(`https://someurl.com/${category}/4`);

// const user = 'Meru';

// alert(`Hello, ${user}`);

// const max = BigInt(Number.MAX_SAFE_INTEGER);

// console.log(max + 1n);
// console.log(max + 2n);
// console.log(max + 3n);

// const max2 = 1_000_000_000_000_000_000n;

// console.log(max2);

console.log('arr' + ' - object');
console.log(4 + +'5');

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--);

console.log(++incr);
console.log(--decr);

console.log(5 % 3);

console.log(2 * 4 == '8'); //даже если обернуть в строку будет работать
console.log(2*4 === 8);

const isChecked = false,
  isClose = false,
  isUn = false,
  isNun = false;
      
      
// console.log(isChecked && isClose && isUn && isNun);
console.log(isChecked || isClose || isUn || !isNun);

console.log(2 + 2 * 2 != 7);

console.log(2 + 2 * 2 != '9');
console.log(2 + 2 * 2 !== '6'); //true, сравнение по типу





