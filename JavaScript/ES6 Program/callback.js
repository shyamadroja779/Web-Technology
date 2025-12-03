function sum (a,b,callback) {
    let result = a + b;
    callback(result);
}

sum(5, 10,(result) => {
    console.log("The sum is: " + result);
});