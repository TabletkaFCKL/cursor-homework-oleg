const teaPrice = 15.678;
const meatPrice = 123.965;
const breadPrice = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
let maximumPrice = Math.max(teaPrice, meatPrice, breadPrice);


//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
let minimumPrice = Math.min(teaPrice, meatPrice, breadPrice);


// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let sumOfProducts = teaPrice + meatPrice + breadPrice;


// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
let sumWithoutDecimals = Math.floor(Math.trunc(teaPrice) + Math.trunc(meatPrice) + Math.trunc(breadPrice));


// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
let sumOfProductsRound = Math.round(sumWithoutDecimals / 100) * 100;


//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
if (sumWithoutDecimals % 2 == 0) {
    // console.log("Парне число");
} else {
    // console.log("Не парне число");
}

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let sumOfRest = 500 - sumOfProducts;


// Виведіть середнє значення цін, округлене до другого знаку після коми
let averagePrice = sumOfProducts / 3;


//Створіть змінну, в якої збережіть випадкову знижку
let discount = Math.random() * 100;

//Задача
let sumOfDiscount = (sumOfProducts / 100) * discount;
let clearPrice = sumOfProducts / 2;
let profit = clearPrice - sumOfDiscount;




document.querySelector('.task-list').innerHTML =
    (`<li>Максимальне число: ${maximumPrice}</li>
      <li>Мінімальне число: ${minimumPrice}</li>
      <li>Сума всіх товарів: ${sumOfProducts}</li>
      <li>Сума всіх товарів округлена: ${sumWithoutDecimals}</li>
      <li>Сума округлена до сотень: ${sumOfProductsRound}</li>
      <li>Парне число: ${sumWithoutDecimals % 2 == 0}</li>
      <li>Решта з 500 грн: ${sumOfRest.toFixed(2)}</li>
      <li>Середня ціна: ${averagePrice.toFixed(2)}</li>
      <li>Знижка: ${discount.toFixed(0)}%</li>
      <li>Сума зі знижкою: ${sumOfDiscount.toFixed(2)}</li>
      <li>Чистий прибуток: ${profit.toFixed(2)}</li> `);

