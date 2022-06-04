function computerPlay() {
    let words = ["Rock", "Paper", "Scissors"]
    randomNum = Math.floor(Math.random(0, words.length) * words.length);
    return words[randomNum]
};

console.log(computerPlay())
