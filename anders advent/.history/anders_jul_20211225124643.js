// variabler
 
// DOM element
const adventCalendar = document.getElementById("adventCalendar");
 
// luckor i form av en array med bilder
let doors = ["candles.gif", "ice44.gif", "merry-christmas.gif", "skiing.gif"];
 
// dynamiskt
// lägg till luckor på kalendern i form av div element
// iterera array doors
 
// skapa en räknare för iterationen - kan användas som siffra på lucka
let counter = 1;
doors.forEach(door => {
 
    // skapa div element
    let div = document.createElement("div");
    
    // lägg till en siffra i elementet
    div.textContent = counter;
 
    // använd ett attribut för att "skicka med" bilden som ska visas
    div.setAttribute("data-image", "images/"+door);
 
    // lägg till draggable="true" för att kunna dra o släppa...
    div.setAttribute("draggable", "true");
 
    // lägg till ett id (används för drag-drop)
    div.id = "n" + counter;
 
    // lägg till kalendern
    adventCalendar.appendChild(div);
 
    // console.log(counter, door);
    counter++;
});
 
 
// hantera händelser
 
adventCalendar.addEventListener("click", function(event) {
 
    // console.log(event);
 
    // vilken bild ska visas...
    let image = event.target.getAttribute("data-image");
    // console.log("image:", image);
 
    // visa bilden som en bakgrundsbild
    // kontrollera att endast div element kan byta egenskap
    if (event.target.nodeName === "DIV") {
        event.target.style.backgroundImage = 'url('+image+')';
    }
 
});
 
// drag and drop...
// se till att element som ska kunna vara möjlig att flytta har egenskapen draggable="true"
// se till att det finns ett id till varje lucka
 
// händelser kopplade till drag-drop
// dragstart
adventCalendar.addEventListener("dragstart", function(event) {
    console.log("dragstart", event.target.id);
 
    // ange egenskapen dataTransfer och aktuellt id
    event.dataTransfer.setData("text", event.target.id);
});
 
// dragenter - när ett element som dras finns under... 
adventCalendar.addEventListener("dragenter", function(event) {
 
    console.log("dragenter");
 
    // visa att ett element är i fokus - border style
    event.target.style.borderColor = "#fff";
});
 
// dragleave - när ett element inte längre finns i fokus
adventCalendar.addEventListener("dragleave", function(event) {
 
    event.target.style.borderColor = "#000";    
});
 
// dragover - visar händelse kontinuerligt när ett element flyttas
adventCalendar.addEventListener("dragover", function(event) {
 
    // preventDefault() för att drop ska fungera
    event.preventDefault();
});
 
// drop - släpp ett element ... och byt plats
// för att drop ska fungera så se till att eventet dragover har preventDefault()...
adventCalendar.addEventListener("drop", function(event) {
    // console.log("drop", event.target);
 
    // vilket element flyttas
    let draggedElementId = event.dataTransfer.getData("text");
    console.log("draggedElementId", draggedElementId);
 
    let draggedElement = document.getElementById(draggedElementId);
    // console.log("Elementet som ska flyttas:", draggedElement);
 
    // var släpptes elementet...
    let targetElementId = event.target.id;
    console.log("targetElementId", targetElementId);
 
    let targetElement = document.getElementById(targetElementId);
 
    // dags att flytta element med metoden insertBefore()
    // insertBefore(newNode, referenceNode);
 
    // elementet som är i nivån ovanför
    let parentElement = targetElement.parentElement;
 
    // flytta endast om parent element är rätt element.... 
    // eftersom metoden som används lägger till ett element före...får man hantera sista elementet annorlunda...
    if (parentElement.nodeName === "MAIN") {
        parentElement.insertBefore(draggedElement, targetElement);
    }
 
});
 