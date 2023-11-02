let player = 3;
let computer = Math.floor(Math.random() * 3 + 1);

if (player === 1 && computer === 1) {
    console.log("Player: Rock");
    console.log("Computer: Rock");
    console.log("Tie");
} else if (player === 1 && computer === 2) {
    console.log("Player: Rock");
    console.log("Computer: Paper");
    console.log("Computer wins");
} else if (player === 1 && computer === 3) {
    console.log("Player: Rock");
    console.log("Computer: Scissors");
    console.log("Player wins");
} else if (player === 2 && computer === 1) {
    console.log("Player: Paper");
    console.log("Computer: Rock");
    console.log("Player wins");
} else if (player === 2 && computer === 2) {
    console.log("Player: Paper");
    console.log("Computer: Paper");
    console.log("Tie");
} else if (player === 2 && computer === 3) {
    console.log("Player: Paper");
    console.log("Computer: Scissors");
    console.log("Computer wins");
} else if (player === 3 && computer === 1) {
    console.log("Player: Scissors");
    console.log("Computer: Rock");
    console.log("Computer wins");
} else if (player === 3 && computer === 2) {
    console.log("Player: Scissors");
    console.log("Computer: Paper");
    console.log("Player wins");
} else if (player === 3 && computer === 3) {
    console.log("Player: Scissors");
    console.log("Computer: Scissors");
    console.log("Tie");
} else {
    console.log("Invalid option");
}
