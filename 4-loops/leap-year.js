//Codédex Checkpoint 1

const year = 2013;

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}


