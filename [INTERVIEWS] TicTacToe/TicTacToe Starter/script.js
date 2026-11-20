// Step 1: when we click on a game square, show if its a X or O
//'X'  if its was player 1 or 'O' if its was player 2
//Update the h1 to say whose turn it its

const allSquares = document.querySelectorAll('.board__square')
const title = document.querySelector(".board__title")

let currentPlayer = 'X'
let gameOver = false;
let board = new Array(9);


allSquares.forEach((square, i) => {
    square.addEventListener("click", () => {
        if (square.innerHTML || gameOver) {
            return;
        }
        square.innerHTML = currentPlayer
        board[i] = currentPlayer

        if (checkWin()) {
            console.log('this long')
            title.innerHTML = `${currentPlayer} Wins The Game!`
            return gameOver = true
        }

        if (checkDraw()) {
            title.innerHTML = `It's a Draw!`
            return gameOver = true;
        }

        currentPlayer = currentPlayer ==='X' ? 'O' : 'X'
        title.innerHTML = `${currentPlayer}'s Turn`
    })
});

function restartGame() {
    gameOver = false
     //1. reset title
    title.innerHTML = `${currentPlayer}'s Turn` 
    //2. rest document
    allSquares.forEach(square => {
        square.innerHTML = ''
    })
    //3. reset board
    board = new Array(9)
}

function checkDraw() {
    for (let i = 0; i < board.length; ++i) {
        if (!board[i]) {
            return false;
        }
    }
    return true;
}

function checkWin() {
    const winningIndicies = [
        //Horizontal Wins
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //Vertical Wins
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //Diagonal Wins
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningIndicies.length; ++i) {
        const matchingIndicies = winningIndicies[i]
        let symbol1 = board[matchingIndicies[0]]
        let symbol2 = board[matchingIndicies[1]]
        let symbol3 = board[matchingIndicies[2]]

        if (!symbol1 || !symbol2 || !symbol3) {
            continue;
        }

        if (symbol1 === symbol2 && symbol2 === symbol3) {
            return true;
        }
    }
}

//Step 2: Determine when the game ends
//when you click on a square, check to see the game ended (win or draw)
//update the text when the game ends. 


//step 3: restart game
//when you click the restart game button, reset the board. 

