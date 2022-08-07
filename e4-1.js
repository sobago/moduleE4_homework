// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.
const wrap = {
    hello: 'world'
  };
  
function showSelfPropertys(obj) {
    for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(`${prop}: ${obj[prop]}`)
      }
    }
}

const objct = Object.create(wrap);

objct['a'] = 1;
objct['b'] = 'str';


// showSelfPropertys(objct);
  
