const CONTAINER  = document.querySelector(".container") ; 

const btnElem = document.createElement("button") ; 
btnElem.append("CLICK ME") ;
CONTAINER.append(btnElem) ;

var height = 80 ; 
btnElem.addEventListener( "click" , function() {
    height += 35 ; 
    let pxHeight = height+"px"; 
    const paraElem = document.createElement("p")  ;
    paraElem.append("JavaScript is fun : ") ; 
    CONTAINER.append(paraElem) ; 
    CONTAINER.style.height = pxHeight ;
});