const CONTAINER = document.querySelector(".container") ; 

const btnElem = document.createElement("button") ;
const paraElem = document.createElement("p");

let btnText = "CLICK ME" ; 
// let paraText = ""

btnElem.append(btnText) ; 
btnElem.style = "background-color : red ; height : 30px ; width : 100px ;"

CONTAINER.append(btnElem) ; 
CONTAINER.append(paraElem) ; 

btnElem.addEventListener("click", function(){
    if ( paraElem.innerHTML != "CLICKED" ) {
        paraElem.innerHTML = "CLICKED" ; 
    }
    else {
        paraElem.innerHTML = "UNCLICKED" ; 
    }
}); 