// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a+b+c;
//         }
//     }
// }

// console.log(add(2)(3)(5))


//shortcut using arrows

// const add = (a) => (b) => (c) => a+b+c;
// console.log(add(2)(3)(5))

// function sendAutoEmail(to) {
//     return function (subject) {
//         return function(body) {
//             console.log(`Sending email to ${to} with subject ${subject} ${body} `)
//         }
//     }
// }

// let step1 = sendAutoEmail("s.varadkar2001@gmail.com")
// let step2 = step1("New Order Confirmation")
// step2("Hey Shreyas There's something new for you")


// shortcut 
const sendAutoEmail = (to) => (subject) => (body) => 
    `Sending email to ${to} with subject ${subject}: ${body} `;

let step1 = sendAutoEmail("s.varadkar2001@gmail.com")
let step2 = step1("New Order Confirmation")
step2("Hey Shreyas There's something new for you")