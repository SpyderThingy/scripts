var x = 0
var y = 0
while (x<=10) {
    x = window.prompt("Enter a number larger than 10.")
    y++
}
if (y = 1) {
    alert("It took you 1 attempt. Great job!")
} else {
    alert("It took you " + y + " attempts.")
}