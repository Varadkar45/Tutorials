//var firstName = 'Steven'; //old way to declare a variable
// let firstName = 'Steven';
// let message = 'Hello';
// message = 'World';
// console.log(message);

// let course = {
//     name: 'Javascript',
//     hours: 3
// };
// console.log(course);

// let age = 18;
// const canDrive = age>=16 ? true : false;
// console.log(canDrive);

// let points = 110;
// const customerType = points>100 ? 'gold' : 'silver';
// console.log(customerType);

/*Operators*/
// let hasReservation = true;
// let acceptingWalkIns = false;

// const hasAccessToTable = hasReservation || acceptingWalkIns;
// console.log(hasAccessToTable);

// let age = 18;
// let hasCar = true;
// const canDrive = age && hasCar;
// console.log(canDrive);

/*Switch case*/
let job = 'Software Developer';

switch(job) {
    case 'Software Developer': 
        console.log('Writes Code');
        break;
    case 'Designer' :
        console.log('Makes user interface documents');
        break;
    case 'Cloud Engineer':
        console.log('Manages and deploys code');
        break;
    default:
        console.log('Works directly with customers');
}