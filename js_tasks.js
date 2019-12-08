//Типы данных и переменные

var name = 'Антон';
console.log(name);
name = 'Ирина';
console.log(name);

//Условный оператор if

if (5 > 1) {
  console.log('Correct!');
} else {
  console.log('Unorrect!');
}

//Циклический оператор for

for (let i = 0; i < 9; i++) {
  console.log(i);
}

//Функции

function sum(p1, p2, p3) {
  var result = p1 + p2 + p3;

  return result;
}
var result = sum(10, 20, 30);
console.log(result)
result = sum(2, 4, 7);
console.log(result)

//Массивы и объекты

// Задание 1.

var array = ['привет', 'loftschool'];

array.push('я изучаю', 'java script');

console.log(array.length)

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Задание 2.

var array = [23, 4, 8, 57, 157, 843, 1, 34, 723, 7];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 100) {
    console.log(array[i]);
  }
}

//Задание 3.

var obj = {
  name: 'Антон',
  lastname: 'Куликов',
  age: '23'
}

console.log(obj.name);
console.log(obj.lastname);
console.log(obj.age);

obj.work = 'programmer';

console.log(obj.work);

//Задание 4.

function hello(human) {
  var text = 'Привет, меня зовут ' + human.name + ' ' + human.lastname + ' и мне ' + human.age + ' лет!';
  return text;
}

var text = hello(obj);
console.log(text);