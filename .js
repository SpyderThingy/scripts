var answer = window.prompt("Do you have a problem today? Type Y or N: ")
if (answer.toLowerCase == "y") {
    alert("Great!")
    } else {
        if (answer.toLowerCase == "n") {
            window.prompt("Tell me more.")
            if (answer.toLowerCase != null) {
                window.prompt("Does talking about this bother you?")
                if (answer.toLowerCase != null) {
                    window.prompt("Tell me more.")
                    if (answer.toLowerCase != null) {
                        window.prompt("Why is this happening?")
                        if (answer.toLowerCase != null) {
                            window.prompt("Do you know how to fix it?")
                            if (answer.toLowerCase != null) {
                                window.prompt("Why are you asking me?")
                        }
                    }
                }
            }
        }
    }
}