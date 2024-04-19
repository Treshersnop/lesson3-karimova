/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
    const regex = /[?(aeyuio)]/g;
    const onlyVowels = str.match(regex) || [];
    return onlyVowels.length;
}

module.exports = getVowelsCount
