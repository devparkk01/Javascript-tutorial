var array = ["Raman" , "Mahesh"] ; 
console.log(array ) ; 

// inserting at the beginning 

array.unshift("Rahul") ;
array.unshift("Ishwar") ;

console.log(array) ; 

let len = array.length
console.log("Length : " + len ) ; 

array.push("Yash") ;
array.push("Ansh") ; 

console.log(array)  ; 
console.log("Length : " + array.length) ;

// splice (start , number ) 

array.splice(2, 2) ;   // used for deleting , first argument specifies the index from where we want to delete 
                        // and second argument specifies how many elements we want to delete 

console.log(array)    //  ["Ishwar", "Rahul", "Yash", "Ansh"] 

array.splice(1) ;  // deletes all element starting from index 1  
console.log(array) ; 


array.push("Hasan") ;
array.push("Harsh") ; 
array.unshift("Illa") ; 

// slice(start , end ) 

var newArray = array.slice() ; // here , creates a new copy of the array  and returns it 
console.log(newArray) ;

var thirdArray = array.slice(1 , 3) ;  // here , first argument is the start index and 
                                   // second argument is the end index (exclusive ) 
                                
console.log(thirdArray) ; 


// reversing an array 
array.reverse() ; 
console.log(array) ;    //  ["Harsh", "Hasan", "Ishwar", "Illa"]


// indexOf (element , start )  
var indexOfIlla = array.indexOf("Illa" , 1) ; 
console.log("First Index that matches 'Illa' after index 1 : " + indexOfIlla) ;

var indexOfIshwar = array.indexOf("Ishwar" );
console.log("Index of Ishwar : " + indexOfIshwar) ; 

var notExist = array.indexOf("Not Exist") ; 
console.log("Index of Not  Exist : " + notExist) ; // -1 

// join(separator)  , returns a string joined by separator ,  by default the separator is ','

var comma = array.join() ; 
console.log(comma) ;
var space = array.join(" ") ; 
console.log(space ) ; 
var pound = array.join("#") ;
console.log(pound) ; 
var commaAndSpace = array.join(", ") ; 
console.log(commaAndSpace) ; 
