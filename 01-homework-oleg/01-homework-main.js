// N - Перше число користувача
let N = +prompt('Введіть ціле число з якого почати рахувати');

while (N === "" || isNaN(N) || !Number.isInteger(N)) {
    N = +prompt('Не вірне перше число, введіть ціле число');
}

// М - друге число користувача
let M = +prompt('Введіть ціле число до якого рахувати');

while (M === "" || isNaN(M) || !Number.isInteger(M)) {
    M = +prompt('Не вірне друге число, введіть ціле число');
}

const min = Math.min(M, N);
const max = Math.max(M, N);
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












