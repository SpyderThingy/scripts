var random = Math.floor(Math.random()*10) 
console.log("Shh! The number is " + random + ". Don't tell anyone!") 
guess = 0 
times = 0 
while (guess!=random) { 
    guess = window.prompt("Guess my lucky number!") 
    times++ 
} alert("The amount of tries needed for this to succeed were: " + times) 