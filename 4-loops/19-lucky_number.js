const luckyNumber = 5;
let guess = Math.floor(Math.random() * 10) + 1;

while (guess !== luckyNumber) {
  console.log(`Your guess of ${guess} was not the lucky number`);
  guess = Math.floor(Math.random() * 10) + 1;
}
console.log(`Your guess of ${guess} was the lucky number`)
