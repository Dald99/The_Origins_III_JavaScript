const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let multiple = 8;
let result = 0;

for (let i = 0; i < numbers.length; i++) {
    result = multiple * numbers[i];
    console.log(`${multiple} * ${numbers[i]} = ${result}`)
}