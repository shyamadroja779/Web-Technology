var a = parseInt(prompt("Enter first number:"));
var b = parseInt(prompt("Enter second number:"));

const min = (a, b) => {
    if (a < b) {
        return a;
    }
    return b;
}
const gcd = (a, b) => {

    var div = min(a, b);

    while (div >= 1) {
        if (a % div == 0 && b % div == 0) {
            return div;
        }
        div--;
    }
}



alert("GCD of " + a + " and " + b + " is " + gcd(a, b));



