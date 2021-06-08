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
// let count = getUserNumber;


for (let i = min; i <= max; i++) {
    if (userChoice && i % 2 == 0) {

        continue;
    }
    sum += i;

}

console.log(sum);










// sum = sum + count;




// let user = 1;
// let usere2 = 10;


// let sum = user + 2;
// sum = sum + 3;
// sum = sum + 4;
// sum = sum + 5;
// sum = sum + 6;
// sum = sum + 7;
// sum = sum + 8;
// sum = sum + 9;
// sum = sum + 10;
// console.log(sum);


//FUNCTIONS//

// function getMaxDigit(...arr) {
//     return Math.max(arr)
// }
// console.log(getMaxDigit(1234));

