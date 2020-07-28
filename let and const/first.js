// var has global scope

function logScope () {
    var localVar = 2 ; 
    if ( localVar) {
        var localVar = "i'm different " ; 
        console.log("nested localVar : " , localVar) ;
    }
    console.log("logScope localVar : " + localVar) ; 
}

logScope() ; 

// let is a block scope variable 

function anotherlogScope () {
    let localVar = 2 ; 
    if (localVar ) {
        let localVar = "i'm different " ; 
        console.log("nested localVar : " , localVar) ; 
    }
    console.log("logScope localVar : " , localVar) ; 
}

anotherlogScope() ; 

const PI = 3.14  ; 
const GREETING = "Hello" ; 
// we can't modify the const variables  

console.log("PI" , PI) ; 
console.log("Greeting : "  , GREETING) ; 
