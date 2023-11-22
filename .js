const randomQuestion = ["What is 8*3?", "What is 4*12?", "What is 3*12?", "What is 7*8?"]
random = Math.floor(Math.random()*randomQuestion)-1
guess = window.prompt(randomQuestion[random])
if (randomQuestion[random] == 0) {
    answer = 24
} else if (randomQuestion[random] == 1) {
    answer = 48
} else if (randomQuestion[random] == 2) {
    answer = 36
} else {
    answer = 56
}
if (guess != answer) {
    guess = window.prompt(randomQuestion[random])
} else {
    alert("GG!")
}