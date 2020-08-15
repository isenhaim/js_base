'use strict';
// 1. Объясните почему код даёт именно такие результаты?
// Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в браузере со
// включенными точками остановки.

//пример 1
let a = 1, b = 1, c, d; 
// Происходит объявление переменных, для переменных "c" и "d" выделяется место в памяти, 
// но на данный момент в них помещается undefined
c = ++a; // Переменной "c" присваивается значение переменной "a" увеличенное на еденицу при помощи инкрементации
// в итоге получаем переменную "с" равную 2.
alert(c); // ответ: 2

//пример 2
d = b++; // Значение переменной "d" = undefined, меняется на значение инкрементируемое 
// при помощи постфиксной инкрементации переменной b, 
// при постфиксной инкрементации переменной "b", переменная "d" получет значение переменной "b" до инкрементации, 
// поэтому alert возвращает значение 1.
alert(d); //ответ: 1

// //пример 3
c = 2 + ++a;  // Переменная "a" была увеличенна при помощи инкрементации на 1 в примере №1 и равна 2. 
// Повторно инкрементируется при помощи префиксной инкрементации и равняется 3. 2 + 3 получаем 5.
//  
alert(c); //ответ: 5

//пример 4
d = 2 + b++; // В примере №2 переменная "b" после применения постфиксной инкрементации равна 2. Переменная d после выполнения суммирования
// переменной "b" и числа 2 дает результат равный 4.
alert(d); //ответ: 4
// Изначально переменная "a" = 1, инкрементируется в примере №1 становится равна 2 и в примере № 3 где становится равна 3. Результат 3.
alert(a); //3 

// Переменная "b" в примере №1 равна 1. Инкрементируется в примере №2 и равна 2. В примере № 4 также инкрементируется и равна 3. Результат 3. 
alert(b); //3

// 2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
// (описать последовательность действий).

let num = 2; // Объявляется переменная "a" ей присваивается значение 2.
let x = 1 + (num *= 2); // При помощи оператора присваивания с умножением, значение переменной "a" умножается на 2 и становится равно 4.
// Операция присваивания с умножением выполняется первой, в связи с расположением внутри скобок. Далее к значению переменной 4 прибавляется 1
// В результате объявленной переменной "x" присваивается значение 5.


// 3. Объявить две переменные a и b и задать им целочисленные произвольные начальные
// значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
// Подсказка, чтобы сделать последний пункт можно также попробовать погуглить по запросу
// «получить знак числа javascript»

let num_1 = 6;
let num_2 = -3;

// Проверка чисел на положительность
if (num_1 >= 0 && num_2 >= 0) {
    alert(num_1 - num_2);
}

// Проверка чисел на отрицательность
if (num_1 < 0 && num_2 < 0) {
    alert(num_1 * num_2);
}

// Проверка чисел на разность знаков
if (Math.sign(num_1) != Math.sign(num_2)) {
    alert(num_1 + num_2);
}


// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.

// Функция получения суммы двух чисел
function getSum(arg_1, arg_2) {
    return arg_1 + arg_2;
}

// Функция получения разности двух чисел
function getDifference(arg_1, arg_2) {
    return arg_1 - arg_2;
}

// Функция получения частного двух чисел
function getDivide(arg_1, arg_2) {
    return arg_1 / arg_2;
}

// Функция получения произведения двух чисел
function getMultiplication(arg_1, arg_2) {
    return arg_1 * arg_2;
}


// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение.

function mathOperation(arg_1, arg_2, operation) {
    switch (operation) {
        case '+':
            return getSum(arg_1, arg_2);
            break;
        case '-':
            return getDifference(arg_1, arg_2);
            break;
        case '/':
            return getDivide(arg_1, arg_2);
            break;
        case '*':
            return getMultiplication(arg_1, arg_2);
            break;
        default: return 'Введите один из знаков +, -, /, *';
    }
}


let result = mathOperation(4, 9, '.');
alert(result);


// 6**. (Сложное задание, требует времени и возможно гугления, делайте по желанию.)
// Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
// положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
// "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
// То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
// числа.



let deposit = +prompt('Введите сумму для зачисления на Ваш счет');
let word = getWord(deposit);

alert(`Ваша сумма в ${deposit} ${word} успешно зачислена.`);

// Функция расчета употребительного падежа для числа. 
function getWord(num) {
    num %= 100;

    if (num >= 10 && num <= 20) {
        return 'рублей';
    }

    num %= 10;
    if (num > 1 && num < 5) {
        return 'рубля';
    }

    if (num == 1) {
        return 'рубль';
    }
}
