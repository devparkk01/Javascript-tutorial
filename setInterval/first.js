const container = document.querySelector(".container") ; 
const btn = document.querySelector("#btn") ;

var currentColor = "cyan" ; 
function color () {
    if  (currentColor == "cyan") {
        container.style.backgroundColor = "green" ;
        currentColor = "green" ; 
    }
    else {
        container.style.backgroundColor = "cyan" ; 
        currentColor = "cyan" ;
    }
}

var interval;

function colorSwitch() {
    
    if ( btn.innerText == "START") {
        btn.innerText = "STOP" ; 
        interval = setInterval(color , 500) ; 
    }
    else {
        clearInterval(interval) ; 
        btn.innerText = "START" ;
    }
}


btn.addEventListener("click" , colorSwitch , false  ) ; 