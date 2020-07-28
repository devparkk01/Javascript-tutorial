const BTN = document.querySelector("#btn") ; 

const FIGCAPTION = document.querySelector("#fc1") ;

let text = "This is the description of the image in a cool way . Can't reveal much ."
BTN.addEventListener("click" , ()=> {
    if (BTN.innerHTML == "SHOW") {
        FIGCAPTION.innerHTML = text ; 
        FIGCAPTION.style = "height : 40px ; color : purple ;" ; 
        BTN.innerHTML = "HIDE" ; 
    }
    else {
        BTN.innerHTML = "SHOW" ;
        FIGCAPTION.setAttribute("style" , "") ; 
        FIGCAPTION.innerHTML = "" ;
    }
})