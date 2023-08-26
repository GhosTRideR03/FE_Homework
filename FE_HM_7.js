// Task 1. Написать функцию, которая получает один аргумент (массив целых чисел: положительных и отрицательных) и возвращает сумму положительных чисел:
let array = [-2, -5, 10, 12, 15, -10, 30];

function positive_nums_sum(array) {
  let sum_of_positive_nums = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum_of_positive_nums += array[i];
    }
  }
  return sum_of_positive_nums;
}

console.log(positive_nums_sum(array));

// Task 2. Написать функцию, которая получает один аргумент (массив целых чисел) и возвращает наибольшее число из массива:
let arr = [-2, -5, 30, 12, 15, -10, 10];

function highest_value(arr) {
  let bigest_num = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > bigest_num) {
      bigest_num = arr[i];
    }
  }
  return bigest_num;
}

console.log(highest_value(arr));

// Task 3. Написать функцию, которая получает на входе массив элементов и определяет, четное или нечетное ко-во элементов в полученном массиве:
let arr2 = [-2, -5, 30, 12, 15, -10, 10];

function odd_even_arr(arr2) {
  let number_of_values = 0;
  for (i = 0; i < arr2.length; i++) {
    number_of_values++;
  }
  if (number_of_values % 2 == 0) {
    return "Even number of values in array";
  } else {
    return "Odd number of values in array";
  }
}

console.log(odd_even_arr(arr2));

//Комментарий к заданию 3: Функция выполняется и в логе выводится соответствующее сообщение, но потом еще строчку с пометкой "Undefined", Так и не разобрался почему....
