startScript = window.prompt("Which script should be started? The multiplier, the one that states your favourite colour, the name swapper, the little test I made, the weekly pay calculator or the address formatter? Answer with 1 to 6 respectively.")
if (startScript == 1) {
    number1 = window.prompt("What number do you wish to multiply?") // he multiplies
    number2 = window.prompt("What are you multiplying it by?") // he goin ham
    alert("The answer is " + number1 * number2 + ".") //answer :woohoo:
} else if (startScript == 2) {
    colour = window.prompt("What's your favourite colour?")
    document.write("Your favourite colour is " + colour + ".") //literally obvious IT STATES A VARIABLE LOL
} else if (startScript == 3) {
    firstName = window.prompt("What's your first name?")
    lastName = window.prompt("What's your last name?")
    document.write(lastName + " " + firstName) //also obvious
} else if (startScript == 4) {
    alert("Hello! This is a text box. I think it's kinda neat.")
    prompts = window.prompt("is this cool?")
    if (prompts.toLowerCase == "yes") {
        alert("Thank you!")
        } else {
            window.prompt("How could this be improved?")
            alert("I will take note of that. (in other words it isn't stored anywhere :3)")
     }
} else if (startScript == 5) {
    hourlyRate = window.prompt("Input your hourly rate.")
    hoursWorked = window.prompt("Input how long you work.")
    alert("Your weekly pay is " + "£" + hourlyRate * hoursWorked + " per week.") //the multiplier reworded    
} else if (startScript == 6) {
    housenumber = window.prompt("Enter your house number.") 
    street = window.prompt("Enter your street.") 
    town = window.prompt("Enter your town.") 
    town = town.charAt(0).toUpperCase + town.slice(1) //capitalises first letter
    house = housenumber + ", " + street + ", " + town 
    alert("You live at " + house + ".") 
}