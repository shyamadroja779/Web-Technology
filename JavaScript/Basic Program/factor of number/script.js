//Factore of given number

let a =parseInt(prompt("Enter a number to find its factors:"));

factor = (num)=>{
    let factors = [];
    for(let i=1;i<=num;i++){
        if(num%i===0){
            factors.push(i);
                }
        
    }
    return factors;
}
console.log(`Factors of ${a} are: ${factor(a)}`);