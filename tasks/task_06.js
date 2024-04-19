/* Вам предоставляется словарь/хэш/объект, содержащий несколько языков, и результаты вашего теста на этих языках.
  Верните список языков, на которых ваш результат теста не ниже 60, в порядке убывания баллов.
 {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
Note: оценки всегда будут уникальными (поэтому никаких повторяющихся значений) */

function myLanguages(results) {
  let big_mark = [];
  let only_marks = [];
  for (let key in results)
  {
    only_marks.push(results[key]);
  }
  only_marks.sort((a, b) => b - a);
  while (true)
  {
    if ((only_marks.length > 0) && (only_marks[0] >= 60))
    {
       for (key in results)
       {
        if (results[key] == only_marks[0])
        {
          big_mark.push(key);
          only_marks.shift();
          break;
        }
       }
    }
    else return big_mark
  }
  
}

module.exports = myLanguages
