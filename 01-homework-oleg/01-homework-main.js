let getUserNumber = +prompt('Введіть ціле число з якого почати рахувати');


while (getUserNumber == "" || isNaN(getUserNumber) || !Number.isInteger(getUserNumber)) {
    getUserNumber = +prompt('Не вірне перше число, введіть ціле число');
}

let getUserNumber2 = +prompt('Введіть ціле число до якого рахувати');



while (getUserNumber2 == "" || isNaN(getUserNumber2) || !Number.isInteger(getUserNumber2)) {
    getUserNumber2 = +prompt('Не вірне друге число, введіть ціле число');
}

const min = Math.min(+getUserNumber2, +getUserNumber);
const max = Math.max(+getUserNumber2, +getUserNumber);

const userChoice = confirm("Пропускати парні?");
let sum = null;



for (let i = min; i <= max; i++) {
    if (userChoice && i % 2 == 0) {
        continue;
    }
    sum += i;
}

console.log(sum);










