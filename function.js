// Завдання №1
console.log('Задання № 1:');

for (let i = 1; i <= 10; i++){

    console.log(`Значення: ${i}`);
    
  }

  // Завдання № 4 Локольна змінна
console.log('Завдання № 4 (локальна змінна):');

function local(){
  let message = 'Hello'
  console.log(message);
}
local();

console.log('Завдання № 4 (Зовнішня змінна):');

let name = "Ivan"

function external(){
  let message = 'Hello ' + name;
  console.log(message);
}
external();

// Завдання № 5
console.log('Завдання № 5:');

function text (){
  console.log('Hello Vlad!!!');
}
text();

// Завдання № 6
console.log('Завдання № 6:');

function calsSum(x, y) {
  console.log(`X: ${x}, Y: ${y}`);
  return  x + y; 
}
let result = calsSum(10, 20);
console.log(`Sum: ${result}`);

// Завдання № 7
console.log('Завдання № 7:');

function Sum(x, y = " + Параметри за замовчуванням") {
  console.log(`X: ${x}, Y: ${y}`);
  return  x + y; 
}
let sum = Sum(10, 56); // Якщо видалити 56 то в консолі виведе 10 + Параметри за замовчуванням.

console.log(`Sum: ${sum}`);


//Розрахунок індексу маси тіла
console.log('Розрахунок індексу маси тіла');

function imt(m, h){
  if(h > 3){
    h = h / 100; 
  }
  let index = m / h ** 2;
  index = Math.floor(index * 10) / 10;
  return index;
}

console.log(`Vlad:  index =  ${imt(85, 1.78)}`);
console.log(`Vlad:  index =  ${imt(85, 178)}`);
console.log(`Oleg:  index =  ${imt(75, 2)}`);
console.log(`Ipina: index =  ${imt(62, 165)}`);