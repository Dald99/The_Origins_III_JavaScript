const dnaPieces = ["A", "C", "G", "T"];

const myDNA = [];

for (let i = 0; i < 24; i++) {
    let randomIndex1 = Math.floor(Math.random() * dnaPieces.length);
    let randomIndex2 = Math.floor(Math.random() * dnaPieces.length);
    let randomIndex3 = Math.floor(Math.random() * dnaPieces.length);

    myDNA.push(dnaPieces[randomIndex1] + dnaPieces[randomIndex2] + dnaPieces[randomIndex3]);
}
console.log(myDNA);

