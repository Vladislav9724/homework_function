//Завдання №1
console.log('Завдання №1');

function detect_data_type(value){
  return typeof(value)
}
detect_data_type(7)
detect_data_type('wm_school')

console.log(detect_data_type(7));
console.log(detect_data_type('wm_school'));

//Завдання №2
console.log('Завдання №2');

function greatest_lowest (arr_num){
  let min = Math.min(...arr_num)
  let max = Math.max(...arr_num)
  console.log(min);
  console.log(max);
}
greatest_lowest([8, 9, 10, 11, 12])
