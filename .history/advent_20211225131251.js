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
    div.setAttribute("data-image", "images/" + door);
    div.setAttribute("draggable", "true");
    div.id = "n" + counter;

    //!Lägg till kalendern
    adventCalender.appendChild(div);

    counter++;
});
//!Hantera händelser

adventCalender.addEventListener('click', function (event) {
    //!console.log(event.target);
    //!vilken bild ska visas
    let image = event.target.getAttribute("data-image");
    console.log("image:", image);
    //visa bilden som backgrund
    //!Kontrolera att endast div element kan byta egenskaper

     div.setAttribute("data-image","images");
    div.setAttribute("draggable", "true");

    if (event.target.nodeName === "DIV") {
        Event.target.style.backgroundImage = "url(" + image + ")";

    }

});
//Drag and drop 
adventCalender.addEventListener('dragstart', function (event) {
    console.log("dragstart", event.target.id);
    //ange dataTransfer och aktuellt id
    event.dataTransfer.setData("text/plain", event.target.id);
});

adventCalender.addEventListener('dragenter', function (event) {

    //!Visa att ett element är i fokus
    event.target.style.borderColor = " #ffff";
});
//!Dragleave-när ett element inte är i fokus
adventCalender.addEventListener('dragleave', function (event) {
    //!Visa att ett element inte är i fokus
    event.target.style.borderColor = "#0000";
});
//!Dragover visar händelse kontinueligt

adventCalender.addEventListener('dragover', function (event) {
    //!För att drop ska fungera måste vi tillåta drop
    event.preventDefault();

});

//!Drop släpp ett element och byt plats
//för att det ska fungera se till att eventet drag over har prevent default
adventCalender.addEventListener('drop', function (event) {
    console.log("drop", event.target);
    let draggedElementId = event.dataTransfer.getData("text");
    let draggedElement = document.getElementById(draggedElementId);
    let targetElementId = event.target.id;
    let targetElement = document.getElementById(targetElementId);
    //!Dags att flytta element med metoden insert before
    let parentElement = targetElement.parentElement;
    if (parentElement.nodeName === "MAIN") {
        parentElement.insertBefore(draggedElement, targetElement);
    }


});