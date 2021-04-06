// 1. Дан код:
// Почему код даёт именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2 + ++a); alert(c);      // 5
d = (2 + b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
// Префиксная форма инкремента - переменной 'с' присваивается значение 2 так как мы сразу используем результат
// Постфиксная форма инкремента - переменной 'd' присваивается значение 1 так как мы получаем значение переменной до увеличения
// У переменной 'a' теперь значение 2, поэтому 2 прибавляем 2 плюс инкремент на 1, получаем 5
// У переменной 'b' теперь значение 2, поэтому 2 прибавляем 2 и получаем 4, но инкремент мы не учитываем, так это постфиксная форма инкремента
// Теперь у переменной 'а' значение 3 так как мы на 6 строке инкременировали значение с 2 до 3
// Теперь у переменной 'b' значение 3 так как мы на 7 строке инкременировали значение с 2 до 3

// 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
// Переменная 'x' будет равно 5, так как 'a' умножаем на 2, а у переменной 'а' значение 2, соответственно в скобках получаем результат 4,
// потом 4 прибавляем 1 и получаем 5.

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
// Затем написать скрипт, который работает по следующему принципу:

// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = 0;
var b = 0;

function math_script(a, b) {
    if (Math.sign(a) == 1 && Math.sign(b) == 1
        || Math.sign(a) == 0 && Math.sign(b) == 0
        || Math.sign(a) == 1 && Math.sign(b) == 0
        || Math.sign(a) == 0 && Math.sign(b) == 1)
        console.log('Числа положительные' + '\n' + 'а - b будет равно ' + (a - b) + '\n' + 'b - a будет равно ' + (b - a));
    else if (Math.sign(a) == -1 && Math.sign(b) == -1) console.log('Числа отрицательные поэтому а * b будет ' + (a * b));
    else console.log('Числа разных знаков поэтому а + b будет ' + (a + b));
}

math_script(a, b)

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// Присвоем переменной 'а' случайное число
var a = getRandomInt(15);
console.log('Число у нас ' + a + ' выводим до 15')
// Я решил сделать эту задачку с помощью рекурсии.
// function recurs() {
//    switch (a) {
//        case a:
//            console.log(a);
//            a++;
//            if (a > 15)
//                break;
//            recurs()
//    }
//}
//recurs()
// Мое решение с помощью рекурсии забраковали.
switch (a) {
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a);
}
// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function sum(a, b) {
    return a + b
}

function subtraction(a, b) {
    return a - b
}

function division(a, b) {
    return a / b
}

function multiplication(a, b) {
    return a * b
}

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2)
        case '-':
            return subtraction(arg1, arg2)
        case '/':
            return division(arg1, arg2)
        case '*':
            return multiplication(arg1, arg2)
    }
}

mathOperation(5, 2, '+')

// 7. *Сравнить null и 0. Попробуйте объяснить результат.

var a = null
var b = 0

console.log(a == b) // false

// Как по мне undefined - это когда ты еще не родился. null - ты призрак. 0 - ты мертвый.

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (val == 0)
        return (0);
    if (pow == 0)
        return (1);
    if (pow < 0)
        return (power(1 / val, -pow));
    else
        return (val * power(val, --pow));
}

console.log(power(5, 3))
