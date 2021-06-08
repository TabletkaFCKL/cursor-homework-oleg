const getUserNumber = +prompt('Введіть ціле число з якого почати рпхувати');
const getUserNumber2 = +prompt('Введіть ціле число до якого рахувати');
if (Number.isInteger(getUserNumber || getUserNumber2) == false) {
    alert('Введіть ціле число!')
}

const userChoice = confirm("Пропускати парні?");
let sum = null;
let count = getUserNumber;


for (let i = getUserNumber; i <= getUserNumber2; ++i && count++) {
    if (userChoice && i % 2 == 0) {

        continue;
    }
    sum = sum + count;

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