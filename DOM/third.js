const firstBox = document.querySelector("#box1") ;


// const 
const firstLink = firstBox.querySelector("#box1 a") ;

// if ( firstBox.)
function bella() {
    const btn = firstBox.querySelector("#btn1") ; 
    if ( btn.innerHTML == "Google" ) {
        btn.innerHTML = "YouTube" ;
        firstLink.setAttribute("href" , "https://www.youtube.com/") ; 
        firstLink.innerHTML = "YouTube" ; 
    }
    else {
        btn.innerHTML = "Google" ;
        firstLink.setAttribute("href" , "https://www.google.com/") ;
        firstLink.innerHTML = "Google" ; 
    }
}