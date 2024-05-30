/*Implement two functions. For the first function, have it accept an array as a parameter which contains a list of numbers. 
Then console log the even numbers in the array.
For the second function, have it accept an array and log the odd numbers.*/
function displayEvenNumbers(array) {
    for(const number in array) {
        if(number%2==0) {
            console.log(number);
        }
    }
}

function displayOddNumbers(array) {
    for(const number in array) {
        if(number%2!=0) {
            console.log(number);
        }
    }
}

displayEvenNumbers([1,2,3,4,5,6,7,8,9]);
displayOddNumbers([1,2,3,4,5,6,7,8,9]);