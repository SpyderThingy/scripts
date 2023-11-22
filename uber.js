const base = 1.10
distance = parseFloat(window.prompt("How far is your journey?"))
time = parseFloat(window.prompt("How long will it take?")*0.1)
fare = time+distance+base
if (fare < 2.5) {
    alert("Your fare is £2.50")
} else {
    alert("Your fare is £" + fare + "0.")
}