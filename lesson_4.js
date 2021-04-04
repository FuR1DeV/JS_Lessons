// 1. Написать функцию, преобразующую число в объект. Передавая на 
// вход число от 0 до 999, мы должны получить на выходе объект, в 
// котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: 
//{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, 
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function obj(params) {
    let res = {
        'сотни': 0, 'десятки': 0, 'единицы': 0
    }
    var digits = params.toString().split('');
    var realDigits = digits.map(Number);
    if (realDigits.length == 3) {
        res.сотни = realDigits[0];
        res.десятки = realDigits[1];
        res.единицы = realDigits[2];
        return res
    }

    if (realDigits.length == 2) {
        res.десятки = realDigits[0];
        res.единицы = realDigits[1];
        return res
    }

    if (realDigits.length == 1) {
        res.единицы = realDigits[0];
        return res
    }
    if (params > 999) {
        return console.log('Число превышает 999 ')
    }

}

obj(prompt('Введите число от 0 до 999'))

// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const basket = {
    name: ['Nissan Tiida', 'Touta Prius', 'Honda Accord'],
    year: [2020, 2021, 2004],
    price: [1550000, 2550000, 450000],
    count: [2, 1, 3],

    countBasketPrice() {
        let basketPrice = 0;
        for (i = 0; i < basket.price.length; i++) {
            basketPrice += basket.price[i] * basket.count[i];
        }
        return `Общая сумма корзины ${basketPrice}`;
    }
};

console.log(basket.name);
console.log(basket.year);
console.log(basket.countBasketPrice());

// 3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, 
// но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, 
// но в разных местах давал возможность вызывать разные методы.

const Product = {
    name: [],
    count: [],
    price: [],
    photogallery: [],
    raiting: [],
    reviews: [],
    comment() { },
    overview() { },
    basket() { },
    share() { },
    favorites() { },
}








