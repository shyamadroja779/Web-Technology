//logic for factorial of number
let num = prompt("Enter a number to find its factorial:");

function factorial(n) {
    let fac=1
    for(let i=1;i<=n;i++){
        fac=fac*i;

    }
    alert(`The factorial of ${n} is ${fac}`);
}
factorial(num);