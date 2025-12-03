var b= (a,b=5)=>
{
    return a+b;
}
console.log(b(10,15));
console.log(b(a=10,b=20));
console.log(b(10));