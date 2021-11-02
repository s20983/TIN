function isPrime(n) {
    for (let i = 2; i<n; i++) {
        if(n%i===0) {
            return false;
        }
    }
    return true;
}

let a = 13;
let b = 18;
console.log(a, "is prime:", isPrime(a));
console.log(b, "is prime:", isPrime(b));