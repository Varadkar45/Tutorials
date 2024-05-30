// function main() {

//     const name = "Shreyas Varadkar"

//     function sayMyName() {
//         console.log(name);
//     }

//     sayMyName();
// }

// main()

// function main(name) {

//     function sayMyName() {
//         console.log(name);
//     }

//     return sayMyName;
// }
// let vara= main('Shreyas') ;
// console.log(vara)

const myName = document.getElementById('my-name');
const btn = document.getElementById('btn');

function makeTextSizer(size) {
    function changeSize() {
        myName.style.fontSize= `${size}px`
    }
    return changeSize;
}

const size12 = makeTextSizer(12)
const size50 = makeTextSizer(50)
const size52 = makeTextSizer(52)
const size5 = makeTextSizer(5)

btn.addEventListener('click', size50)