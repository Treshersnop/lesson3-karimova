/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

function abs(array) {
    let sum = 0;
    array.forEach(item => sum += item);

    sum = Math.round(sum / array.length * 10);
    return sum / 10
}

module.exports = abs
