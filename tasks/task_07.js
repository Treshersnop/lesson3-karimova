/*Ваша задача — написать такую кодировку.
  Для данной строки верните массив массивов [[i1, s1], [i2, s2], …, [in, sn]],
так что можно восстановить исходную строку, реплицируя символ sx ix раз и объединяя. Ваша кодировка длины серии должна быть минимальной, т.е.
. для всех i значения si и si+1 должны различаться.*/
// runLengthEncoding("hello world!")
//=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]
function runLengthEncoding(str) {
  let chars = str.split('');
  let count_chars = []
  while (chars.length > 0)
  {
    let char = chars.shift();
    if (count_chars.length == 0)
    {
      count_chars.push([1, char]);
    }
    else if (count_chars[count_chars.length - 1][1] == char)
    {
      count_chars[count_chars.length - 1][0] += 1;
    }
    else 
    {
      count_chars.push([1, char]);
    }
  }
  return count_chars;
}

module.exports = runLengthEncoding