// 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
// 4*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 4.1. Создать массив товаров (сущность Product);
// 4.2. При загрузке страницы на базе данного массива генерировать вывод из него. 
// HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.

const Product = [
    {
        model: 'Nissan',
        count: 1,
        price: '1500000'
    },
    {
        model: 'Toyota',
        count: 2,
        price: '750000'
    },
    {
        model: 'Honda',
        count: 3,
        price: '300000'
    }
]

var cart = document.getElementById('cart');
var catalog = document.getElementById('catalog');
var resSum = 0;
var resCount = 0;
var resName = ' ';


function fillingCart(Product) {
    Product.forEach(el => resSum += el.count * el.price);
    Product.forEach(el => resCount += el.count);
    Product.forEach(el => resName += el.model + ', ');
    if (resSum === 0 && resCount === 0) {
        cart.textContent = "Корзина пуста"
    }
    cart.textContent = `В корзине: ${resCount} товаров на сумму ${resSum} рублей`
    catalog.textContent = `Список товаров: ${resName} `

}

fillingCart(Product);