let question = "Will I win the lottery?";

console.log(question);

let num = Math.floor(Math.random() * 8);
if (num === 1){
    console.log("Magic 8 Ball: Yes - definitely.");
}else if (num === 2){
    console.log("Magic 8 Ball: It is decidedly so.");
}
else if (num === 3){
    console.log("Magic 8 Ball: Without a doubt.");
}
else if (num === 4){
    console.log("Magic 8 Ball: Reply hazy, try again.");
}else if (num === 5){
    console.log("Magic 8 Ball: Ask again later.");
} else if (num === 6) {
    console.log("Magic 8 Ball: Better not tell you now.");
} else if (num === 7) {
    console.log("Magic 8 Ball: My sources say no.");
} else if (num === 8) {
    console.log("Magic 8 Ball: Outlook not so good.");
} else {
    console.log("Magic 8 Ball: Very doubtful.");

}


