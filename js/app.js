

function makeBlue(eventDetails) {
    console.log(eventDetails);
    greet.style.color = "blue";

}

function makeGreen(eventDetails) {
    console.log(eventDetails);
    quotes.style.color = "green";
}

function keyboardPressed(e) {
    console.log(e);
    let keys = e.key;
    document.getElementById('userinput').innerText+= keys;
}

let quotes = document.getElementById('quote');
let greet = document.getElementById('greeting');

greet.addEventListener('click', makeBlue);
quotes.addEventListener('mouseover', makeGreen);
document.body.addEventListener('keypress', keyboardPressed);