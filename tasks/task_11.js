/*
Вы реализуете один раз функцию,
которая принимает другую функцию в качестве аргумента и возвращает новую версию этой функции,
которую можно вызвать только один раз.

Последующие вызовы результирующей функции не должны иметь никакого эффекта (и должны возвращать неопределенное значение).

Например:

logOnce = один раз(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> нет эффекта
*/
function once() {
  let func = arguments[0];
  let count = 0;
  return function () {
    count += 1;
    if (count == 1) {
      return func.apply(null, arguments);
    }
  };
}
module.exports = once;
