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
    div.setAttribute("draggable","true");
    div.id = "number" + counter;

    //!Lägg till kalendern
    adventCalender.appendChild(div);

    counter++;
});
    //!Hantera händelser

    adventCalender.addEventListener('click',function(event){
        //!console.log(event.target);
        //!vilken bild ska visas
        let image = event.target.getAttribute
        ("data-image");
        console.log("image", image);
        //visa bilden som backgrund
        //!Kontrolera att endast div element kan byta egenskaper
        
        div.setAttribute(data-image,"images");
        div.setAttribute("draggable","true");

        if(event.target.nodeName === "DIV"){
        Event.target.style.backgroundImage = "url(" + image+ ")";
    }

    });
    //Drag and drop 
    adventCalender.addEventListener('dragstart',function(event){
        console.log("dragstart",event.target.id);
        //ange dataTransfer
        event.dataTransfer.setData("text/plain",event.target.id);
    });