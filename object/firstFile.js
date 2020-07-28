// learning object here 

var bus = new Object() ; 

bus = {
    noOfPassengers : 1 , 
    driverName  : "Dev " , 
    busNo : "TU92434" ,
    startFrom : "Delhi" ,
    destination : "Shimla" , 
    updatePassengers : function () {
        this.noOfPassengers++ ; 
    }
} ; 

console.log(bus) ; 


var student = new Object() ; 
student = {
    name : "Dev Prakash" ,
    usn : "1BM18IS147" , 
    sem : 4 , 
    course : [] ,
    addCourse : function (courseName) {
        this.course.push(courseName)  ; 
    }
} ; 

console.log(student) ; 
student.addCourse("DBMS") ; 
console.log(student.course) ; 
student.addCourse("JAVA") ; 
console.log(student.course) ; 

console.log("USN : " , student["usn"]) ; 

student["sem"]   = 5 ;      // student.sem = 5 ; 
console.log("SEMESTER : " , student.sem) ; 