// making use of object constructors

function Student (name , sem , usn , age ) {
    this.name = name ; 
    this.sem = sem ; 
    this.usn = usn ; 
    this.age = age ;
    this.course = [] ;
    this.addCourse = function(courseName) {
        this.course.push(courseName)  ; 
    } ; 
    this.basicDetail = function () {        
        console.log(this.name +  ' , ' + this.sem + ' , '  + this.usn ) ; 
    } ;

} ; 

var student01 = new Student("Dev Prakash" , 4 , "1BM18IS147" , 20 ) ;
console.log(student01) ; 
student01.basicDetail() ; 
student01.addCourse("JAVA") ; 
console.log(student01.course) ; 

var student02 = new Student() ; 
console.log(student02) ; 



function Book (bookId , bookName , authorName , page , price = 0   ) {
    this.bookId = bookId ; 
    this.bookName = bookName ; 
    this.authorName = authorName ; 
    this.page = page ;
    this.price = price ; 

    this.incrementPrice = function (perc  = 0) {
        this.price = this.price + (this.price ) * perc / 100; 
    } ; 
    this.decrementPrice = function (perc  = 0 ) {
        this.price = this.price - (this.price) *perc/ 100 ; 
    } ; 
    this.detail = function () {
        console.log(this.bookId + " , " + this.bookName + " , " + this.authorName) ; 
    }

} ; 

var book01 = new Book(1 ,"The Alchemist" ,"Paulo Coelho" , 230  ) ;
console.log(book01) ; 
book01.detail() ; 

var book02 = new Book(2 , "Dracula" , "Bram Stoker" , 370 , 200) ;
book02.detail() ; 

console.log("Price : " + book02.price ) ;
book02.incrementPrice(10 )  ;
console.log("Price : " + book02.price ) ; 
book02.decrementPrice(10) ; 
console.log("Price : " + book02.price ) ; 

book02.incrementPrice(25) ; 
console.log("Price : " + book02.price) ; 



console.log(Book.price ) ; // undefined  

