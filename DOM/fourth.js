const divSuccess = document.querySelectorAll(".div-success") ;
console.log(divSuccess) ; 

const firstElement = divSuccess[0].classList ;
const secondElement = divSuccess[1].classList ; 

console.log(firstElement) ; 

console.log(secondElement)  ; 

// adding class "align-success" to the firstElement 
firstElement.toggle("align-success") ; 

console.log(firstElement) ;  

console.log(firstElement.contains("align-success")) ; 
console.log(secondElement.contains("align-success") ) ;

console.log("class at index 1:" , firstElement.item(1)) ; 
console.log("class at index 1:" , firstElement[1]) ; 

// toggling 

firstElement.toggle("bg-success")  ; 
console.log(firstElement.contains("bg-success")) ; 

console.log(firstElement) ;     

firstElement.toggle("bg-success")  ; 
console.log(firstElement.contains("bg-success")) ; 


// removing align-success and bg-success from firstElement  
firstElement.remove("align-success" , "bg-success") ; 

