var startScript
//this next line asks what program should be run
startScript = window.prompt("Which script should be started? The multiplier, the one that states your favourite colour, the name swapper, the little test I made or the weekly pay calculator? Answer with 1, 2, 3, 4 and 5 respectively.")
if (startScript == 1) {
    var number1
    number1 = window.prompt("What number do you wish to multiply?") // he multiplies
    var number2
    number2 = window.prompt("What are you multiplying it by?") // he goin ham
    alert("The answer is " + number1 * number2 + ".") //answer :woohoo:
} else if (startScript == 2) {
    var colour
    colour = window.prompt("What's your favourite colour?")
    document.write("Your favourite colour is " + colour + ".") //literally obvious
} else if (startScript == 3) {
    var firstName
    firstName = window.prompt("What's your first name?")
    var lastName
    lastName = window.prompt("What's your last name?")
    document.write(lastName + " " + firstName) //also obvious
} else if (startScript == 4) {
    var prompts //this is a test. i used it as my first time with if/else statements after 4-5 years
    alert("Hello! This is a text box. I think it's kinda neat.")
    prompts = window.prompt("is this cool?")
if (prompts.toLowerCase == "yes") {
    alert("Thank you!")
    } else {
        window.prompt("How could this be improved?")
        alert("I will take note of that.")
    }
} else if (startScript == 5) {
    var hourlyRate
    hourlyRate = window.prompt("Input your hourly rate.")
    var hoursWorked
    hoursWorked = window.prompt("Input how long you work.")
    alert("Your weekly pay is " + "£" + hourlyRate * hoursWorked + " per week.") //the multiplier reworded    
}