// creating custom dates 

let d1 = new Date(2000 , 10 , 23 , 22 , 12 , 23 , 987) ; // full format 
// year , month , date , hour , minute , second 
console.log(d1) ; 
console.log(d1.toDateString()) ; 


let d2 = new Date (2001 , 3 ,4 ) ; // year , month , date 
console.log(d2) ; 

let d3 = new Date(2002 , 4) ; // year , month
console.log(d2) ;
console.log(d2.toDateString()) ; 

let d4 = new Date(345000000 ) ; // milliseconds
console.log(d4) ;

// date input format as string "yyyy-mm-dd" 
// here month starts from 1     

let d5 = new Date("2015-10-23") ; // month is from 1- 12 here 
console.log(d5.toDateString()) ;

let d6 = new Date("2015-10") ; // year , month
console.log(d6.toDateString()) ;

let d7 = new Date ("2015") ; // only year 
console.log(d7.toDateString()); 
