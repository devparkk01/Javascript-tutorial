let arr = ["This" , "is" , "Apple", "not" , "Mango"] ;
// demonstrates for -- of -- loop 


for ( let elem of arr) {
    console.log(elem) ; 
}

const BODY = document.body ;

for ( let elem of arr) {
    let paraElem = document.createElement("p") ; 
    paraElem.append(elem) ; 
    BODY.append(paraElem) ; 
};