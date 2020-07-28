
function isPrime(num) {
    if (num <= 0 ) return `${num} is not greater than 0 ` ;
    if ( num == 1) return `${num} is not a prime number ` ; 
    else {
        for ( let div = 2 ; div < num ; ++div) {
            if ( num % div == 0 ) {
                return `${num} is a composite number ` ; 
            }
        }
        return `${num} is a prime number `;
    }
};

var i = 0 ; 
while ( i < 10 ) {
    console.log(isPrime(i)) ;
    i++;
}; 