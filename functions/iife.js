//  iife stands for immediately invoked function expression 
//  It runs as soon as it is defined 
// also called self executing anonymous function

var double = (function(name ){
    return name+name ;
})("shyam")  ; 

console.log("double stores : "+ double ) ; 

var b = (function(a){
    return a*a ; 
})(5) ; 

console.log("b : " + b) ; 

var num = 5 ; 
var execute = (function(a){
    return a + " is my favourite number : " ; 
})(num) ; 
console.log(execute) ; 


var lang = 'javascript' ; 
var print = (function() {
    var result = `i'm learning ${lang}` ; 
    return result ; 
})() ; 

console.log(print) ; 