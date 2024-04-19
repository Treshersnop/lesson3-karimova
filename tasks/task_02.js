/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */

const reverseString = require('../tasks/task_01');

function isPalindrome(str) {
    const reverse_str = reverseString(str);
    return reverse_str === str;
}

module.exports = isPalindrome;
