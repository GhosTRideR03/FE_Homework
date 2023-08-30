// Task 1: Написать функцию, которая принимает товары (массив объектов) и возвращает строку Самый дорогой товар <НАЗВАНИЕ> стоит  USD.
let products = [
  { title: "Product 1", category: "tv", supplier: "usa", price_usd: 1000 },
  { title: "Product 2", category: "tv", supplier: "germany", price_usd: 880 },
  { title: "Product 3", category: "tv", supplier: "china", price_usd: 500 },
];

function the_highest_price(products) {
  let highest_value = 0;
  let product_title = "";
  for (let i = 0; i < products.length; i++) {
    if (products[i].price_usd > highest_value) {
      highest_value = products[i].price_usd;
      product_title = products[i].title;
    }

    return console.log(
      `Самый дорогой товар ${product_title} стоит ${highest_value} USD.`
    );
  }
}

the_highest_price(products);

// Task 2: Напишите функцию, которая выводит все числа от 1 до 100, кратные трем.
function divider_three_nums() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}
divider_three_nums();

// Task 3: Напишите функцию, которая находит сумму всех чисел от 1 до 100 и выводит ее в консоль.
function sum_of_nums() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}
sum_of_nums();
