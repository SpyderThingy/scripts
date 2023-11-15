var random = Math.floor(Math.random()*10)
var guess = window.prompt("Enter your guess to this lucky number!")
var times = 1
console.log(random)
while (guess > random) {
    guess = window.prompt("Wrong! The answer is lower.")
    times = times++
}
while (guess < random) {
    guess = window.prompt("Wrong! The answer is higher.")
    times = times++
}
alert("Nice! that took you " + times + " tries.")