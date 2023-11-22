fare = 1.10 * parseInt(window.prompt("Approximately how long is your journey in miles?"))
fare = fare * window.prompt("How long will your journey take?")/10
if (fare < 2.5) {
    alert("Your fare is £2.50")
} else {
    alert("Your fare is £" + fare + "0.")
}
