// Variabler för andra HTML-element i dokumentet
const button = document.getElementById("myButton");
const inputField = document.getElementById("starsInput");
const messageHolder = document.getElementById("messageHolder");

// Funktion som körs när knappen "myButton" klickas på
function firstFunction() {
    // Loggar antalet stjärnor som användaren har matat in
    console.log("Number of stars: ", inputField.value);

    // Hämtar antalet stjärnor från inputfältet
    let numberOfStars = inputField.value;

    // Om användaren angett mindre än 3 stjärnor visas ett negativt meddelande
    if (numberOfStars < 3) {
        messageHolder.innerHTML = "Inte tack för att du röstade";
    } else {
        // Annars visas ett positivt meddelande
        messageHolder.innerHTML = "Tack för att du röstade, du är en stjärna!";
    }

    // Döljer inputfältet och knappen efter att användaren klickat
    inputField.classList.add("hidden-element");
    button.classList.add("hidden-element");
}

// Lägger till en event-lyssnare för knappens "click"-händelse
button.addEventListener("click", firstFunction);

// Hämta element från DOM
const hamburger = document.querySelector("#hamburgerMenu");
const menu = document.querySelector("#navMenu");

// Lägg till en klick-händelse på hamburger-ikonen
hamburger.addEventListener("click", function () {
	menu.classList.toggle("open"); // Växla klassen "open" på menyn
});
