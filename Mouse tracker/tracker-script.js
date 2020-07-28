const BOX = document.querySelector(".container");
const CIRCLE  = document.querySelector(".circle") ; 

var boxWidth  = BOX.clientWidth ; 
var boxHeight = BOX.clientHeight ; 
var boxLeftOffset = BOX.offsetLeft ; 
var boxTopOffset = BOX.offsetTop ; 

var circleWidth = CIRCLE.clientWidth ;

function mouseCoordinates (e) {
    let xPosition = e.clientX ; // absolute x of mouse 
    let yPosition = e.clientY ; // absolute y of mouse 
    
    let horizontal = boxWidth  + boxLeftOffset - 25 - xPosition  ; // position with respect to BOX
    let vertical = boxHeight + boxTopOffset - 25 - yPosition  ; // position with respect to BOX 

    CIRCLE.style.left = horizontal + "px" ; 
    CIRCLE.style.top = vertical + "px" ;

}

function changeColorOnEnter () {
    CIRCLE.style.backgroundColor = "crimson" ;
    CIRCLE.style.borderColor = "yellow";
    CIRCLE.style.height = `${CIRCLE.clientHeight * 2}px` ; 
    CIRCLE.style.width = `${CIRCLE.clientWidth *  2}px` ;
}

function changeColorOnLeave() {
    CIRCLE.style.backgroundColor = "black" ;
    CIRCLE.style.borderColor = "red" ;
    CIRCLE.style.height = `${CIRCLE.clientHeight /2}px` ;
    CIRCLE.style.width = `${CIRCLE.clientWidth / 2 }px` ;
}

BOX.addEventListener( "mousemove" ,  mouseCoordinates ,false ) ; 

CIRCLE.addEventListener("mouseenter" , changeColorOnEnter , false);

CIRCLE.addEventListener("mouseleave" ,changeColorOnLeave , false) ; 