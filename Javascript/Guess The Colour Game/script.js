const colorCodeContainer = document.getElementById('color-code')
const optionContainer = document.getElementById('option-container')


let randomColor = null;

function generateRandomNumberBetween(min, max) {
    return min + Math.floor(Math.random()*(max-min+1))
}

function generateRandomColorRGB() {
    const red = generateRandomNumberBetween(0,255);
    const green = generateRandomNumberBetween(0,255);
    const blue = generateRandomNumberBetween(0,255);
    return `rgb(${red},${green},${blue})`;
}

function validateResult(el) {
    console.log(el.target)
    const selectedColor = el.target.style.backgroundColor;
    console.log(selectedColor==randomColor)
}

function startGame() {
    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor ;

    const ansIndex = generateRandomNumberBetween(0,5)

    for (let i=0; i<6; i++) {
        const div=document.createElement("div");
        div.addEventListener('click', validateResult)
        div.style.backgroundColor = i === ansIndex ? randomColor : generateRandomColorRGB();
        optionContainer.append(div);
    }

} 



window.addEventListener("load", ()=> startGame())
