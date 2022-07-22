let gameBoard = document.getElementById('gameBoard')
var boxes = Array.from(document.getElementsByClassName('box'))

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
// When Game Start && Clicked Boxes Item(s)
const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}
// When the Game Principle Logic Mashed with one of Logic
const gameOver = () => {
    // opacity
    bodyOpac = document.getElementById('body')
    bodyOpac.style.cursor = 'pointer'
    titleOpa = document.getElementById('titleText')
    titleOpa.style.opacity = '.1'
    // After Mashing one of Principle Logic, Boxed click is not required.So, Stoping Boxed Click
    for (let i = 0; i < 9; i++) {
        box = document.getElementsByClassName('box')[i]
        box.style.pointerEvents = 'none'
        box.style.opacity = '.1'
    }

    // Showing Modal Property when CurrentPlayer or computer win
    containerDiv = document.getElementById('winnigDisplay')
    containerDiv.classList.add('winModal')
    var newAddDiv = document.createElement('div')
    newAddDiv.innerHTML = `<h1>Congratulation! ${currentPlayer} won the Game!</h1>`
    containerDiv.appendChild(newAddDiv);
}
// When Principle Logic isn't Mashed Up with none.This Match Will be Draw.Showing Here Match Drawing By Modal Window.
const gameDraw = () => {
    containerDiv = document.getElementById('winnigDisplay')
    containerDiv.classList.add('winModal')
    var newAddDiv = document.createElement('div')
    newAddDiv.innerHTML = `<h1>What a game! Match Draw!</h1>`
    containerDiv.appendChild(newAddDiv);

    // After Mashing one of Principle Logic, Boxed click is not required.So, Stoping Boxed Click
    for (let i = 0; i < 9; i++) {
        box = document.getElementsByClassName('box')[i]
        box.style.pointerEvents = 'none'
        box.style.opacity = '.1'
    }
    // 
    titleOpa = document.getElementById('titleText')
    titleOpa.style.opacity = '.1'
}
// Draw Counter
var count = 1
const gameDrawCount = () => {
    var disp = document.getElementById("draw");
    disp.innerText = count;
    count++;
}
// X Win Counter
var countX = 1
const XWinCount = () => {
    var dispX = document.getElementById("XP");
    dispX.innerText = countX;
    countX++;
}
// O win counter
var countO = 1
const OWinCount = () => {
    var disp = document.getElementById("OP");
    disp.innerText = countO;
    countO++;
}
//Wininng Modal Window is Removing By clicked itself.
const displayRem = document.getElementById('winnigDisplay')
displayRem.addEventListener('click', function handleClick(event) {
    console.log(event.target);
    event.target.remove();
    reStart()
    // Title Text style Remove
    titleOpa = document.getElementById('titleText')
    titleOpa.style.opacity = ''
});

// Principle Logic
function winingplayer() {
    C0 = boxes[0].innerText
    C1 = boxes[1].innerText
    C2 = boxes[2].innerText
    C3 = boxes[3].innerText
    C4 = boxes[4].innerText
    C5 = boxes[5].innerText
    C6 = boxes[6].innerText
    C7 = boxes[7].innerText
    C8 = boxes[8].innerText;
    console.log(C0, C1, C2, C3, C4, C5, C6, C7, C8)
    // Tic Tac Toc Principle Logic
    var X_O = currentPlayer
    if ((C0 == X_O) && (C1 == X_O) && (C2 == X_O)) {
        gameOver(), X_O == "X" ? XWinCount() : OWinCount()
    } else if ((C3 == X_O) && (C4 == X_O) && (C5 == X_O)) {
        gameOver(), X_O == "X" ? XWinCount() : OWinCount()
    } else if ((C6 == X_O) && (C7 == X_O) && (C8 == X_O)) {
        gameOver(), X_O == "X" ? XWinCount() : OWinCount()
    } else if ((C0 == X_O) && (C3 == X_O) && (C6 == X_O)) {
        gameOver(), X_O == "X" ? XWinCount() : OWinCount()
    } else if ((C1 == X_O) && (C4 == X_O) && (C7 == X_O)) {
        gameOver(), X_O == "X" ? XWinCount() : OWinCount()
    } else if ((C2 == X_O) && (C5 == X_O) && (C8 == X_O)) {
        gameOver(), X_O == "X" ? XWinCount() : OWinCount()
    } else if ((C0 == X_O) && (C4 == X_O) && (C8 == X_O)) {
        gameOver(), X_O == "X" ? XWinCount() : OWinCount()
    } else if ((C2 == X_O) && (C4 == X_O) && (C6 == X_O)) {
        gameOver(), X_O == "X" ? XWinCount() : OWinCount()
    }
    else if (C0 && C1 && C2 && C3 && C4 && C5 && C6 && C7 && C8) {
        gameDraw(), gameDrawCount()
    }
}
// When a box(es) clicked
function boxClicked(e) {
    id = e.target.id
    if (boxes) {
        if (!(e.target.innerText)) {
            e.target.innerText = currentPlayer
        }
        else {
            boxClicked()
        }
        winingplayer()
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}
// When Restart Button Clicked
document.getElementById('reStart').addEventListener('click', reStart)
function reStart() {
    // Boxes All Elements,HTML-Tag, InnerText, Style are being Empty. 
    for (var i = 0; i < boxes.length; i++) {
        divText = document.querySelectorAll('.box')[i]
        divText.innerHTML = ' '
        divText.style = 'none'
        divText.title = 'Tanjimul'
    }
    bodyOpac = document.getElementById('body')
    bodyOpac.style = 'none'
    // Win Show Modal display Properties are being Empty.
    containerDiv = document.getElementById('winnigDisplay')
    containerDiv.innerHTML = ' '
    // Title Text style Remove
    titleOpa = document.getElementById('titleText')
    titleOpa.style.opacity = ''
    currentPlayer = X_TEXT
};
// Starting Game From here
startGame()