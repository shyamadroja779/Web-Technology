var a= parseInt(prompt("Enter a 2-digit number: "));

let op1=Math.floor(a/10);
let op2=a%10;

let result=op1*op2;

alert(`The multiplication of digits ${op1} and ${op2} is: ${result}`);