//program to create a simple calculator using popup boxes

    let num1=parseFloat(prompt("Enter the first number:"));
    let num2=parseFloat(prompt("Enter the second number:"));
    let operator=prompt("Enter the operator (+, -, *, /):");
    let result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            alert(`The result of ${num1} + ${num2} is ${result}`);
            break;
        case '-':
            result = num1 - num2;
            alert(`The result of ${num1} - ${num2} is ${result}`);
            break;
        case '*':
            result = num1 * num2;
            alert(`The result of ${num1} * ${num2} is ${result}`);
            break;
        case '/':
            if(num2 !== 0) {
                result = num1 / num2;
                alert(`The result of ${num1} / ${num2} is ${result}`);
            } else {
                alert("Error: Division by zero is not allowed.");
            }
            break;
        default:
            alert("Invalid operator. Please use one of +, -, *, /.");
    }   