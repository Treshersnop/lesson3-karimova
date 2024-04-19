/*
* Написать функцию, которая форматирует продолжительность, заданную в секундах, удобным для человека способом.

Функция должна принимать неотрицательное целое число.
*  Если оно равно нулю, оно просто возвращает «now».
*  В противном случае продолжительность выражается как комбинация years, days, hours, minutes и seconds.
*
Гораздо проще понять на примере:
* Для seconds = 62, ваша функция должна вернуть результат.
    "1 minute and 2 seconds"
* Для seconds = 3662 ваша функция должна вернуть результат.
    "1 hour, 1 minute and 2 seconds"
Для целей год состоит из 365 дней, а день — из 24 часов.

Обратите внимание, что пробелы важны.

Подробные правила
Результирующее выражение состоит из таких компонентов, как 4 seconds, 1 year и т.д.
*  Обычно это положительное целое число и одна из допустимых единиц времени, разделенные пробелом.
*  Единица времени используется во множественном числе, если целое число больше 1.
*

* Компоненты разделяются запятой и пробелом («,»).
*  За исключением последнего компонента, который разделяется символами «and», как если бы он был написан на английском языке.
Более значимые единицы времени наступят раньше, чем наименее значимые.
*  Следовательно, 1 second and 1 year неверно, но 1 year and 1 second верно.
*
Разные компоненты имеют разную единицу измерения времени. Таким образом, нет повторяющихся единиц, таких как 5 seconds и 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
Компонент вообще не появится, если его значение равно нулю.
*  Следовательно, 1 minute and 0 seconds недопустимы, но они должны составлять всего 1 minute.
Единицу времени необходимо использовать «насколько это возможно».
*  Это означает, что функция должна возвращать не 61 seconds, а 1 minute and 1 second.
*  Формально длительность, указанная в компоненте, не должна превышать любую допустимую более значимую единицу времени.
*
* * */

function countSeconds (list_seconds){
    const list_time = ['second', 'minute', 'hour', 'day', 'year'];
    let right_list_time = []
    
    for (let time = 0; time < list_seconds.length; time++)
    {
        if (list_seconds[time] == 0) continue
        else if (list_seconds[time] == 1) right_list_time.push(`${list_seconds[time]} ${list_time[time]}`)
        else right_list_time.push(`${list_seconds[time]} ${list_time[time]}s`);
    }

    if (right_list_time.length == 1) return right_list_time[0]
    else if (right_list_time.length == 0) return '';

    right_list_time.reverse();
    right_list_time.splice(-1, 0, 'and');
    right_list_time.splice(-3, 3, right_list_time.slice(-3).join(' '));
    return right_list_time.join(', ')
}

function formatDuration (seconds) {
    let new_seconds = seconds % 60;
    let minutes = Math.trunc(seconds / 60) % 60;
    let hours = Math.trunc(seconds / 3600) % 24;
    let days = Math.trunc(seconds / 86400) % 365;
    let years = Math.trunc(seconds / 31557600);

    return countSeconds([new_seconds, minutes, hours, days, years])
}

module.exports = formatDuration