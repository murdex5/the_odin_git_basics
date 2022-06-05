function computerPlay() {
    let words = ["Rock", "Paper", "Scissors"];
    randomNum = Math.floor(Math.random(0, words.length) * words.length);
    return words[randomNum];
};

function playerPlay(word) {
    return word;
};

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection;
    let cs = computerSelection;
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    if (ps == rock && cs == paper) { // Rock player lose
        return "You lose! " + cs + " beats " + ps + ".";
    } else if (ps == rock && cs == scissors) { // Rock player win
        return "You win! " + ps + " beats " + cs + ".";
    } else if (ps == rock && cs == ps) { // Rock player same
        return "Tie... Try again!";
    } else if (ps == paper && cs == scissors) { // Paper player lose
        return "You lose! " + cs + " beats " + ps + ".";
    } else if (ps == paper && cs == rock) { // Paper player win
        return "You win! " + ps + " beats " + cs + ".";
    } else if (ps == paper && cs == ps) { // Paper player same
        return "Tie... Try again!";
    } else if (ps == scissors && cs == rock) { // Scissors player lose
        return "You lose! " + cs + " beats " + ps + ".";
    } else if (ps == scissors && cs == paper) { // Scissors player win
        return "You win! " + ps + " beats " + cs + ".";
    } else if ( ps == scissors && cs == ps) { // Scissors player same
        return "Tie... Try again!";
    } else {
        return "Enter the correct value"
    }
};

// let playerWord = playerPlay("Rock");
// let computerWord = computerPlay();

// console.log("You chose " + playerWord)
// console.log("Computer chose " + computerWord)
// console.log(playRound(playerWord, computerWord))

// function game(playRound) {
//     computerScore = 0;
//     playerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerWord = prompt("Rock, paper or scissors: ")
//         let computerWord = computerPlay();
//         console.log(playRound(playerWord, computerWord))
//     }
// }

// game(playRound)