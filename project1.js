const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hello",name, "Welcome to our Game! ")

const shouldWePlay = prompt('Do you want to Play? ')

const condition = shouldWePlay.toLowerCase() === "yes"

if (condition) {
    //Game Logic
    const leftOrRight = prompt("You Enter a Maze, Do you want to go left or right? ").toLowerCase()
    if (leftOrRight === "left")
        {
        console.log("You go left and see bridge...")
    const cross = prompt("Do you want to cross the bridge? ").toLowerCase()
    if (cross === "yes" || cross === "y" || cross === "okay") {
        console.log ("You cross the bridge but it failed and you fell. You lost...")
    } else {
         console.log("Good choice... You win!")
    }
} else {
    console.log("You go right and fall of a cliff...")
}
 } else if (shouldWePlay.toLowerCase() === "no") {console.log("Okay :(")}
else {
    console.log("Invalid input...")
}