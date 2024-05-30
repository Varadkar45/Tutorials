/*Implement a function to accept a number. 
Then return “FizzBuzz” if divisible by 3 and 5 
Or return "Fizz” if only divisible by 3 
Or return "Buzz” if only divisible by 5 
Or return the original number if not divisible by 3 or 5*/

function fizzBuzz(num1) {
    if(num1 % 3 === 0 && num1 % 5 === 0) {
        console.log('FizzBuzz');
    } else if(num1 % 3 === 0) {
        console.log('Fizz');
    } else if(num1 % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(num1);
    }

}

fizzBuzz(15);