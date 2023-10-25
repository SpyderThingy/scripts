var x = Math.floor(Math.random()*10)
console.log(x)
var y = 0
var times = 0
while (y!=x) {
    document.write(x)
    y = window.prompt("Enter a number equal to 10.")
    times++
} alert("The amount of tries needed for this to succeed were: " + times)