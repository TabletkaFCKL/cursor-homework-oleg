let getUserNumber = +prompt('Введіть ціле число з якого почати рахувати');

if (getUserNumber == 0) {
    //Пропускаємо 0
} else {
    while (getUserNumber == "" || isNaN(getUserNumber) || !Number.isInteger(getUserNumber)) {
        getUserNumber = +prompt('Не вірне перше число, введіть ціле число');
    }
}

let getUserNumber2 = +prompt('Введіть ціле число до якого рахувати');

if (getUserNumber2 == 0) {
    //Пропускаємо 0
} else {
    while (getUserNumber2 == "" || isNaN(getUserNumber2) || !Number.isInteger(getUserNumber2)) {
        getUserNumber2 = +prompt('Не вірне друге число, введіть ціле число');
    }
}


const min = Math.min(getUserNumber2, getUserNumber);
const max = Math.max(getUserNumber2, getUserNumber);
const skipEvenNumbers = confirm("Пропускати парні?");
let sum = null;

if (min == max) {
    console.log(min);
} else {
    for (let i = min; i <= max; i++) {
        if (skipEvenNumbers && i % 2 == 0) {
            continue;
        }
        sum += i;
    }
    console.log(sum);
}












