//!variabler luckor
//!DOM element
const adventCalender = document.getElementById("adventCalender");
//!variabler for the days in a array luckor med bilder
let doors = ["jul1.jpeg", "jul2.jpeg", "jul3.jpeg", "jul4.jpeg", "jul5.jpeg", "jul6.jpeg"];
//!variabler for the days in a array luckor med bilder
//!Itererar igenom arrayen och skapa en räknare
let counter = 1;
doors.forEach((door) => {
    console.log(counter, door);
    //!skapa en div för varje bild
    let div = document.createElement("div");
    //!lägg till en siffra i elementet
    div.textContent = counter;
    //!Lägg till kalendern
    adventCalender.appendChild(div);

    counter++;

})