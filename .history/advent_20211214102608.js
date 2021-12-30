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
    //!Använd ett attribut för att kunna ändra bilden
    div.setAttribute("data-image","images/" + door);
    //!Lägg till kalendern
    adventCalender.appendChild(div);

    counter++;
    //!Hantera händelser
    adventCalender.onclick=function(event){
    }

    adventCalender.addEventListener("click", (event) => {
        //!Kolla om det är en div
        if (event.target.tagName === "DIV") {
            //!Hämta bilden
            let image = event.target.getAttribute("data-image");
            //!Ändra bilden
            adventCalender.style.backgroundImage = "url(" + image + ")";
        }
    


});

