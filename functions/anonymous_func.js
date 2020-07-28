var product = function(a , b ) {
    var result = a * b ; 
    return result ; 
}

console.log(product(4,5 )) ; 
var a = 10 ; 
var b = 20 ; 
console.log(product(a ,b )) ; 

var num = 15 ;

var square = function() {
    return num * num ; 
}

console.log(square()) // uses num = 15 here , since num is a global variable 
