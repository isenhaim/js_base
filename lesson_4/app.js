'use strict';

// 1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
// units: 5, //это единицы
// tens: 4, //это десятки
// hundreds: 0, //это сотни
// }
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
// Вам может пригодиться:
// Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее здесь
// https://mzl.la/2XCVSsx
// Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще
// говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .
// Используйте также остаток от деления на 10, например 123 % 10 будет 3
// Вам также может пригодится делить число на 100 и на 10

function createObjectInNum(num) {
    // Выполняем проверки на то что параметр num является целым числом и входит в диапазон от 0 до 999
    if (Number.isInteger(num) && 0 <= num && num <= 999) {
        // Возвращаем готовый объект
        return {
            units: Math.floor(num % 10), //это единицы
            tens: Math.floor(num / 10 % 10), //это десятки
            hundreds: Math.floor(num / 100), //это сотни
        };
    } else {
        console.log('Вы ввели не целое число либо оно выходит за пределы диапазона от 0 до 999!');
        // Возвращаем пустой объект
        return {};
    }
}

// Создаем переменныю и в нее помещаем объект созданный функцией createObjectInNum
let newObj = createObjectInNum(45);

// Выводим в консоль поочередно все свойства.
console.log(newObj.hundreds);
console.log(newObj.tens);
console.log(newObj.units);

// 1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
// принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
// должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.

// Style ES5

/**
 * Функция конструктор принемающая на вход параметры name и price */ 
function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}

// Добавляем в прототип метод make25PercentDiscount
ProductES5.prototype.make25PercentDiscount = function() {
    this.price *= 0.75;
}

// Создаем объект типа ProductES5
const product_one = new ProductES5('Laptop', 890000);

// Выводим в консоль свойство price объекта product_one
console.log(product_one.price);

// Используем метод make25PercentDiscount
product_one.make25PercentDiscount();

// Повторно выводим свойство price объекта product_one, 
// чтобы убедиться что метод make25PercentDiscount работает корректно
console.log(product_one.price);

// Style ES6

/**
 * Класс ProductES6 принемающий на вход параметры name и price 
 */
class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // Объявление метода make25PercentDiscount класса ProductES6
    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

// Создаем экземпляр класса ProductES6
const product_two = new ProductES6('Phone', 55000);

// Выводим в консоль свойство price экземпляра класса ProductES6
console.log(product_two.price);

// Используем метод make25PercentDiscount класса ProductES6 для изменения свойства price с учетом скидки.
product_two.make25PercentDiscount();

// Повторно выводим свойство price объекта product_two, 
// чтобы убедиться что метод make25PercentDiscount работает корректно
console.log(product_two.price);


// 1.2. Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),

// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства
// объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать
// его в свойство text объекта.

// Style ES5
/**
 * Функция конструктор принемающая на вход параметры author, text, date */ 
function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

// Добавляем метод edit в прототип PostES5 котороый произведет замену иходного свойства text, на произвольный
PostES5.prototype.edit = function (text){
    this.text = text;
}

// Создаем объект типа PostES5
const post_one = new PostES5('Alex', 'My new post for blog', '22.08.2020');

// Выводим в консоль его свойства
console.log(post_one.author);
console.log(post_one.text);
console.log(post_one.date);

// Применяем метод edit
post_one.edit('My edit post');

// Проверяем что свойство text исходного объекта изменилось
console.log(post_one.text);


// Style ES6
/**
 * Класс PostES6 принемающий на вход параметры author, text, date
 */
class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    // Объявляем метод edit
    edit(text) {
        this.text = text;
    }
}

// Создаем экземпляр класса
const post_two = new PostES6('John', 'My new post for ES6', '28.03.2020');

// Выводим в консоль свойства объекта
console.log(post_two.author);
console.log(post_two.text);
console.log(post_two.date);

// Применяем метод edit
post_two.edit('My edit post for ES6');

// Убеждаемся, что метод edit работает корректно
console.log(post_two.text);

// б) конструктор AttachedPost, который принимает параметры author, text, date.
// Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также
// в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
// Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
// свойству highlighted значение true.
/**
 * Функция конструктор принемающая на вход параметры author, text, date */ 
function AttachedPostES5(author, text, date) {
    // Наследуем свойства author, text, date от типа PostES5, вызывая конструктор и передавай туда параметры.
    PostES5.call(this, author, text, date);
    // Добавляем собственное свойство
    this.highlighted = false;
}

// Наследуем методы от типа PostES5
AttachedPostES5.prototype = Object.create(PostES5.prototype);

// Добавляем собственное свойство makeTextHighlighted
AttachedPostES5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

// Создаем объект
const attach_post_one = new AttachedPostES5('Fill', 'New post for blog', '18.02.2019');

// Выводим свойство text
console.log(attach_post_one.text)

// Проверяем унаследованный метод edit
attach_post_one.edit('Edit post');

// Убеждаемся что все работает
console.log(attach_post_one.text);

// Проверяем собственный метод
attach_post_one.makeTextHighlighted();


/**
 * Класс принемающий на вход параметры author, text, date и унаследованные от родительского класса PostES6*/ 
class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        // Передаем параметры в конструктор родительского класса
        super(author, text, date);
        // Объявляем собственное свойство
        this.highlighted = false;
    }

    // Объявляем собственный метод makeTextHighlighted меняющий свойство highlighted
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

// Создаем экземпляр класса
const attach_post_two = new AttachedPostES6('Max', 'Attach new post for ES6', '09.09.2016');

// Выводим свойство объекта
console.log(attach_post_two.highlighted);

// Применяем собственный метод объекта
attach_post_two.makeTextHighlighted();

// Убеждаемся, что он работает
console.log(attach_post_two.highlighted);

// Выводим свойство text
console.log(attach_post_two.text);

// Используем унаследованный от класса PostES6 метод edit
attach_post_two.edit('Attach edit post for ES6');

// Убеждаемся, что все корректно
console.log(attach_post_two.text);