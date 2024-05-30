let currentPlayer = 'X';
let arr = Array(9).fill(null);
function checkWinner() {
    if (
        (arr[0]!==null && arr[0]==arr[1] && arr[1]==arr[2]) ||
        (arr[3]!==null && arr[3]==arr[4] && arr[4]==arr[5]) ||
        (arr[6]!==null && arr[6]==arr[7] && arr[7]==arr[8]) ||
        (arr[0]!==null && arr[0]==arr[3] && arr[3]==arr[6]) ||
        (arr[1]!==null && arr[1]==arr[4] && arr[4]==arr[7]) ||
        (arr[2]!==null && arr[2]==arr[5] && arr[5]==arr[8]) ||
        (arr[0]!==null && arr[0]==arr[4] && arr[4]==arr[8]) ||
        (arr[2]!==null && arr[2]==arr[4] && arr[4]==arr[6]) 
        
    ) {
        document.write(`Winner is ${currentPlayer}`)
        return;
    }
    if(!arr.some((e) => e===null )) {
        document.write(`Draw!`)
    }

}

function handleClick(el) {
    const id = Number(el.id); 
    if(arr[id] !==null) return;// so that user cannot click on the same box again
    arr[id] = currentPlayer;// puts x or O as current move
    el.innerText = currentPlayer; //to render on screen
    checkWinner();
    currentPlayer = currentPlayer ==='X'?'0':'X';
    
}