const fs = require('fs');

const os = require('os')
// //Sync
// fs.writeFileSync("./test.txt", "Hello World");


// //Async
// fs.writeFileSync("./test.txt", "Hello World", (err)=>{});


// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result)

//Remember Async requires callback function as it is a void so it won't return any value
// fs.readFile("./contacts.txt", "utf-8", (err,result)=> {
//     if(err) {
//         console.log("Error",err);
//     } else {
//         console.log(result);
//     }
// })


// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// console.log(fs.statSync('./test.txt'))

// fs.mkdirSync("my-docs")

// synchronous - blocking request 
// console.log("1")
// const result = fs.readFileSync('contacts.txt','utf-8')
// console.log(result)
// console.log('2')

//asynchronous - non blocking request
// console.log("1")
// fs.readFile('contacts.txt','utf-8', (err,result)=> {
//     console.log(result)
// })
// console.log('2')

console.log(os.cpus().length)