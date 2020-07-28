const body = document.body ; 
const btn = document.createElement("button") ; 

body.style.backgroundColor = "blue" ; 

styleAttr = "position : relative ; top : 200px ; left : 500px ;  color : red ;"
btn.setAttribute("style" ,styleAttr ) ;

btn.append("CLICK ME") ; 

body.append(btn) ; 

btn.addEventListener("click" , function() {
    if ( btn.style.color == "red") {
        btn.style.color  = "blue" ; 
    }
    else {
        btn.style.color = "red" ; 
    }
}) ;


btn.addEventListener("click" , ()=>{
    if ( body.style.backgroundColor == "blue") {
        body.style.backgroundColor = "red" ; 
    }
    else {
        body.style.backgroundColor = "blue" ; 
    }
}) ; 
// here , both of the above functions will be fired when we 
// click the button . 