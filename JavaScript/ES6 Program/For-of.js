const a=[1,2,3,4,5];

for (const i of a) {
    console.log(i);   
}

const obj={
    name:"Alice",
    age:28,
    city:"New York"
};

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}