// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let nums = [];
// Так как простые числа начинаются с цифры 2, то и цикл мы так же начнем с цифры 2.
for (i = 2; nums.length < 99; i++) {
    nums.push(i);
}
console.log('Ниже вам представлены все простые числа от 0 до 100')
n = 0
while (n < 99) {
    for (let i = 2; i < nums[n]; i++) {
        if (nums[n] % i == 0) {
            nums[n] = '';
            break;
        }
    }
    if (Number.isInteger(nums[n])) console.log(nums[n]);
    n++;
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let named = ['Radeon RX 580', 'GeForce 3080 GTX', 'GeForce 2080 GTX']
let price = [13500, 100500, 30100]
let count = [3, 2, 5]
let card = [named, price, count]
let BasketPrice = []
let CommonBasketPrice = 0

function countBasketPrice(named, price, count) {
    for (i = 0; i < price.length; i++) {
        BasketPrice.push(price[i] * count[i])
        CommonBasketPrice += price[i] * count[i];
        console.log('Вы заказали ', count[i], 'шт.', named[i], 'На сумму', BasketPrice[i])
    }
}

countBasketPrice(card[0], card[1], card[2])

console.log('Общая стоимость корзины - ' + CommonBasketPrice)

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

for (let i = 0; i < 10; console.log(i), i++) {
    // Пустое тело
}

// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
console.log('Ниже вам представлена пирамида в 20 рядов');
for (i = 1; i < 21; i++) {
    let s = "";
    for (let j = 0; j < i; j++) {
        s += "x";
    }
    console.log(s);
}



