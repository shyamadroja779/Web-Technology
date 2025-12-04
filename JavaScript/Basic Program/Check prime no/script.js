// logic for checking prime number
let a = parseInt(prompt("Enter a number to check prime or not: ")); //get nummber from user

function isPrime(num) {
    for (let i = 2; i < a; i++) { // this for loop will run from 2 to number-1
        if (num % i === 0) {   // check if number is divisible by any number between 2 to number-1
            alert(`${num} is not prime `)
        }
        else
            alert(`${num} is prime`)
        break;
    }
}

isPrime(a);