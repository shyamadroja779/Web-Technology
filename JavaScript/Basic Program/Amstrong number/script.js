
let a =(prompt("enter a number:"));

function isArmstrongNumber(num){
let real = num;
let b = 0;

// find the lenght of number
let lenght = num.toString().length;
console.log(lenght) 

//logic for Armstrong number
while(num>0){

    let digit = num%10;
     b= b+ (digit ** lenght);
    num = Math.floor(num/10);

}
if(b === real)
    alert(`${real} is an Armstrong number`);
else
    alert(`${real} is not an Armstrong number`);
}
isArmstrongNumber(a);