let a = parseInt(prompt("Enter a number: "));
function isPalindrome(num) {

let real  = num;
let rev = 0;
while(num>0){

    digit = num%10;
    rev = rev*10 +digit;
    num = Math.floor(num/10);
}
if (real === rev)
    alert(` ${real}is a palindrome`);
else
    alert(` ${real}is not a palindrome`);
}
isPalindrome(a);