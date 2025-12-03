class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let p1 = new Person("shyam", 20);
p1.print();