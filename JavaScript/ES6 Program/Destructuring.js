const a=[1,2,3,4,5,6];

const[first,...rest]=a;

console.log(first);
console.log(rest);

const person={
    name:"Bob",
    age:25,
    city:"Los Angeles"
}

const{name:fullname,...details}=person;

console.log(fullname);
console.log(details);