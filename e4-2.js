// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
// есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const str1 = 'strin';
const obj = {
    a: 123,
    x: 3.14,
    hello: 'world',
    strin: 'strinG'
}

function hasPropertyOrNot(str, obj) {
    if (str in obj) {
        return true
    } else {
        return false
    }
}

// console.log(hasPropertyOrNot(str1, obj))