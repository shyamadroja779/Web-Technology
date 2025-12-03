const a=[1,2,3];
const b=[...a,4,5,6];
console.log(b);

const person={
    name:"John",
    age:30
};
const emp ={
    salary:50000,
    name:"Doe"
};

emp1={...person,...emp};
console.log(emp1);