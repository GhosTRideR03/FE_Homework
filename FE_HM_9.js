// Task_1: Описать три произвольных товара (название, цена) и написать функцию, которая принимает массив товаров и возвращает их среднюю стоимость.

let products = [
    { title: "Product 1", price: 500 },
    { title: "Product 2", price: 1500 },
    { title: "Product 3", price: 2200 },
  ];
  
  function average_price(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
         sum += products[i].price;
    }
    return sum / products.length;
  }
  
  console.log(average_price(products));
  
  // Task_2: Написать функцию, которая принимает стоимость (заказа), применяет к ней произвольную скидку от 5 до 10 процентов и возвращает стоимость со скидкой.
  
let product_price = +prompt("Input Price:");

function discount_calculator(product_price){
    let discount = (5 + Math.floor(Math.random() * 5));
    let reduced_price = product_price * (1 - (discount / 100));
    return reduced_price;
}
console.log(discount_calculator(product_price));

// Скидываю без рефакторинга т.к. уже поздно и нет времени на это, а завтра не успею до урока...