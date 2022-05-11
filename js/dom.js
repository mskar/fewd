// Use a DOM Getter to target the H1 and buttons, setting them as JS variables
// Create 2 functions, each one targeting a specific Style property for the H1
// Add those functions to your buttons via Event Listeners, so when you click them, the H1’s style will change

let title = document.getElementById("title")
let button1 = document.getElementById("button-1")
let button2 = document.getElementById("button-2")

function makeTitleColorRed() {
    title.style.color = "red"
}

function makeButton1BackgroundColorYellow() {
    button1.style.backgroundColor = "yellow"
    button1.style.color = "red"
    button1.style.borderStyle = "dashed"
}

function makeButton2BorderColorBlue() {
    button2.style.borderStyle = "dotted"
    button2.style.backgroundColor = "orange"
    button2.style.color = "blue"
}

title.addEventListener("click", makeTitleColorRed)
button1.addEventListener("click", makeButton1BackgroundColorYellow)
button2.addEventListener("click", makeButton2BorderColorBlue)