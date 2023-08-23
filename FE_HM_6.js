// Task_1:
let price = +prompt("Input price");
let ten_percent_dsc = price * 0.9;
let ten_percent_more = price * 1.1;
let twfive_percent_dsc = price * 0.75;
let twfive_percent_more = price * 1.25;
let one_percent_discount = price * 0.99;
let one_and_half_percent_more = price * 1.015;

alert(ten_percent_dsc);
alert(ten_percent_more);
alert(twfive_percent_dsc);
alert(twfive_percent_more);
alert(one_percent_discount);
alert(one_and_half_percent_more);

// Task_1.1:
let price_two = +prompt("Input price:");

if (price_two >= 100) {
  alert(`конечная цена: ${price_two * 0.95}`);
} else {
  alert(`конечная цена: ${price_two}`);
}

// Task_2:
let num = +prompt("Input number:");

if (num < 0) {
  alert(`${num} меньше чем 0`);
} else if (num > 0) {
  alert(`${num} больше чем 0`);
} else {
  alert(`${num} равен 0`);
}

// Task_3:
let num_two = +prompt("Input number:");
let last_num = num_two % 10;

alert(last_num);

// Task_4:
// Функция, которая принимает два числа и возвращает их сумму:
let sum;
// Функция, которая вычисляет среднее значение массива чисел:
let average_value;
// Функция, которая проверяет, является ли число четным:
let is_positive;
// Функция, которая определяет, является ли число простым:
let is_simple;
// Функция для форматирования даты в удобочитаемый вид:
let date_refactor;
// Функция, которая принимает строку и возвращает её с заглавной первой буквой:
let to_capital_letter;
// Функция, которая обращает порядок элементов в массиве:
let arr_reverse;
// Функция, которая генерирует случайное число в заданном диапазоне:
let random_num_10_to_100;
// Функция, которая преобразует строку в верхний регистр:
let to_upper_case;
// Функция, которая преобразует строку в нижний регистр:
let to_lower_case;
// Функция, которая проверяет, является ли строка допустимым адресом электронной почты:
let if_correct_mail;
// Функция, которая находит наибольшее значение из массива чисел:
let bigest_num_in_array;
// Функция, которая находит наименьшее значение из массива чисел:
let lowest_num_in_array;
// Функция, которая вычисляет площадь геометрической фигуры:
let figure_square;
// Функция для перевода температуры из Цельсия в Фаренгейт:
let celcius_to_farenheit;
// Функция для перевода температуры из Фаренгейта в Цельсий:
let farenheit_to_celcius;
// Функция, которая вычисляет факториал числа:
let factorial_num;
// Функция, которая вычисляет расстояние между двумя точками в пространстве:
let distance;
// Функция, которая форматирует число как денежную сумму в нужной валюте:
let num_to_currency;
// Функция, которая возвращает длину строки:
let string_lenght;
