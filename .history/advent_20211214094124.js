//!variabler luckor
//!DOM element
const adventCalender = document.getElementById("adventCalender");
//!variabler for the days in a array luckor med bilder
let doors = ["jul1.jpeg","jul2.jpeg",jul3.jpeg",jul4.jpeg",jul5.jpeg",jul6.jpeg" ];
//!variabler for the days in a array luckor med bilder
//!Itererar igenom arrayen
for each (let door in doors) {
    //!skapar en div
    let newDiv = document.createElement("div");
    //!lägger till en bild
    newDiv.innerHTML = "<img src=" + door + ">";
    //!lägger till den nya diven i adventCalender
    adventCalender.appendChild(newDiv);
}
