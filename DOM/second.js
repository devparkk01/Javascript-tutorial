// let elemArr = document.getElementsByClassName("container") ; 
const elemArr = document.querySelectorAll('.container') ; // Not working 
console.log(elemArr) ;
const btnElem = document.querySelector("#btn-1") ; 
const firstContainer = elemArr[0] ;
const secondContainer = elemArr[1] ; 
console.log(firstContainer) ;

function changeButtonOne () {
    if (firstContainer.style.backgroundColor == 'red' ){
        firstContainer.style.backgroundColor = 'blue' ; 
    }
    else {
        firstContainer.style.backgroundColor = 'red' ; 
    }
}

function changeButtonTwo () {
    if (secondContainer.style.backgroundColor == "red") {
        secondContainer.style.backgroundColor = "blue" ; 
    }
    else {
        secondContainer.style.backgroundColor = "red" ; 
    }
}

const firstPara = firstContainer.querySelector("#firstPara") ; 

firstContainer.addEventListener("mouseover" , function() {
    firstContainer.style.height = "100px" ; 
    firstPara.style.fontSize = "30px" ; 
    firstPara.align = "right"  ; 

}) ; 

firstContainer.addEventListener("mouseout" , function() {
    firstContainer.style.height = "50px" ; 
    firstPara.style.fontSize = "16px" ; 
    firstPara.align = "left" ; 
})

const secondPara = secondContainer.querySelector("#secondPara") ; 

secondContainer.addEventListener("mouseover" , function() {
    secondContainer.style.height = "100px" ; 
    secondPara.style.fontSize = "30px" ; 
    secondPara.align = "right" ;
})

secondContainer.addEventListener("mouseout" , function() {
    secondContainer.style.height = "50px" ;
    secondPara.style.fontSize = "16px"  ; 
    secondPara.align = "left" ;
})
