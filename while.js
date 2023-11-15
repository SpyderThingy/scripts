var random = Math.floor(Math.random()*10) 
console.log("Shh! The number is " + random + ". Don't tell anyone!") 
guess = window.prompt("Guess my lucky number!") 
times = 1
while (guess!=random) {
    if (guess < random) {
        guess = window.prompt("Wrong! The answer is higher!") 
    } else {
        guess = window.prompt("Wrong! The answer is lower!") 
    }
    times++ 
} alert("YIPPEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!")
console.log("The amount of tries needed for this to succeed were: " + times)