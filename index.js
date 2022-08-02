
let gameBoard = document.getElementById('gameBoard')
var boxes = Array.from(document.getElementsByClassName('box'))

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
// When Game Start && Clicked Boxes Item(s)
const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
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
    // gameBoard = document.getElementById('gameBoard')
    // gameBoard.style.opacity = '.1'

    // Showing Modal Property When Current Player or Computer Win
    containerDiv = document.getElementById('winnigDisplay')
    containerDiv.classList.add('winModal')
    var newAddDiv = document.createElement('div')
    newAddDiv.innerHTML = `<h1>Congratulation! ${currentPlayer} won the Game!</h1>`
    containerDiv.appendChild(newAddDiv);
    if (currentPlayer == 'X') {

        randomNum = Math.floor(Math.random() * 3)
        if (randomNum == 0) {
            document.getElementById('xSound-0').play()
        }
        if (randomNum == 1) {
            document.getElementById('xSound-1').play()
        }
        if (randomNum == 2) {
            document.getElementById('xSound-2').play()
        }
    }
    else {
        randomNum = Math.floor(Math.random() * 3)
        if (randomNum == 0) {
            document.getElementById('oSound-0').play()
        }
        if (randomNum == 1) {
            document.getElementById('oSound-1').play()
        }
        if (randomNum == 2) {
            document.getElementById('oSound-2').play()
        }
    }
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
    // Draw
    titleText = document.getElementById('titleText')
    titleText.style.opacity = '.1'
    randomNum = Math.floor(Math.random() * 2)
    if (randomNum == 0) {
        document.getElementById('drawSound-0').play()
    }
    if (randomNum == 1) {
        document.getElementById('drawSound-1').play()
    }
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
// Draw Counter
var count = 1
const gameDrawCount = () => {
    var disp = document.getElementById("draw");
    disp.innerText = count;
    count++;
}
//Wininng Modal Window is Removing By clicked itself.
// WDR = Wining Display Remove
var wDR = document.getElementById('winnigDisplay')
wDR.addEventListener('click', function handleClick() {
    reStart()
    wDR.innerHTML = '';
    wDR.style = '';
    // when wining display is clicking , restart sound off 
    document.getElementById('reStart-0').pause()
    document.getElementById('reStrt-1').pause()
    document.getElementById('reStrt-2').pause()
    document.getElementById('reStrt-3').pause()
});
// When Restart Button Clicked
document.getElementById('reStart').addEventListener('click', reStart)
function reStart() {
    // Boxes All Elements; HTML-Tag, InnerText, Style are being Empty. 
    removeBoxTittledisplayStyle()
    bodyEle = document.getElementById('body')
    bodyEle.style = ''
    // Win Show Modal display Properties are being Empty.
    containerDiv = document.getElementById('winnigDisplay')
    containerDiv.innerHTML = ''
    TitleDisplayStyleRemove()
    // Play With Computer Display Removeing
    playComDisRemove()
    // Restart Music is Playing
    // Restart sound-0
    R0 = document.getElementById('reStart-0')
    R1 = document.getElementById('reStrt-1')
    R2 = document.getElementById('reStrt-2')
    R3 = document.getElementById('reStrt-3')
    randomNum = Math.floor(Math.random() * 4)
    if (randomNum == 0) {
        R0.play()
        R1.pause(), R2.pause(), R3.pause()
    }
    if (randomNum == 1) {
        R1.play()
        R0.pause(), R2.pause(), R3.pause()
    }
    if (randomNum == 2) {
        R2.play()
        R0.pause(), R1.pause(), R3.pause()
    }
    if (randomNum == 3) {
        R3.play()
        R0.pause(), R1.pause(), R2.pause()
    }

    // Play Music Display and Music Remove
    music = document.getElementById('playMusic')
    music.style = ''
    music.pause()
    currentPlayer = X_TEXT
};

// Preference Button
document.getElementById('preference').addEventListener('click', preferbtn = () => {
    preferDis = document.getElementById('preferDis')
    newPrefDiV = document.createElement('div')
    newPrefDiV.classList.add('preferNewDivDis')
    newPrefDiV.innerHTML = `<div class="offcanvas offcanvas-top preDivMod" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    <div class="offcanvas-body">
    <p class="button" id='playWith' onclick="compDispFunc()">Play with Computer</p>
    <!--UI DropDown Button  -->
    <div class="dropdown" style='display:inline-block'>
        <button style='border:none' class="button" data-bs-toggle="dropdown">
            UI Change
        </button>
        <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#" id='backGrounChan' onclick='backgroundChange()'>Background Change</a></li>
            <li><a class="dropdown-item" href="#" id='font' onclick='fontFamily()'>Font Change</a></li>
            <li><a class="dropdown-item" href="#" id='color' onclick='fontColor()'>Font Color</a></li>
            <li><a class="dropdown-item" onclick="playMusicFunc();">Play Music</a></li>
        </ul>
    </div>
    <div class="dropdown" style='display:inline-block'>
    <button style='border:none' class="button" data-bs-toggle="dropdown">
        Sound
    </button>
    <button style='border:none' class="button" data-bs-toggle="dropdown">
        About
    </button>
    <ul class="dropdown-menu dropdown-menu-dark"'
        <li style='text-align:center'>
        <a class='button' onclick="aboutAuthor();" style='text-decoration:none;'>
        Game Author</a>
        </li>
        <li style='text-align:center'>
        <a class='button' id='game' style='text-decoration:none;'>Game<a>
        </li>
    </ul>
     </div>
    </div>
    </div>`
    preferDis.appendChild(newPrefDiV)
})
// Play With Computer Display
compDispFunc = () => {
    preferDis = document.getElementById('preferDis')
    preferDis.style = ''
    preferDis.innerHTML = ''
    playWithCom = document.getElementById('playWithCom')
    playWithCom.innerHTML = '';
    playWithCom.style.cursor = 'pointer'
    newComDiV = document.createElement('p')
    newComDiV.classList.add('playWithComNew')
    newComDiV.innerHTML = `Play with Computer is not available now. I am trying to fixed it. Sorry for that. Thank You!`
    playWithCom.style.opacity = '1'
    // title Text div opacity
    titleText = document.getElementById('titleText')
    titleText.style.opacity = '.1'
    // box div style
    for (let i = 0; i < 9; i++) {
        box = document.getElementsByClassName('box')[i]
        box.style.opacity = '.1'
    }
    // Result div style
    resultDisplay = document.getElementById('resultDisplay')
    resultDisplay.style.opacity = '.1'
    playWithCom.style.opacity = '1'
    playWithCom.appendChild(newComDiV)
}
// play With Computer Display Remove
var playWithCom = document.getElementById('playWithCom')
playWithCom.addEventListener('click', playComDisRemove = () => {
    playWithCom.style.cursor = 'pointer'
    playWithCom.innerHTML = '';
    playWithCom.style = '';
    removeBoxTittledisplayStyle()
    resultCounterDisplayRemove()
})

//Box and Tittle Display and Style Remove 
function removeBoxTittledisplayStyle() {
    // Box style remove
    for (let i = 0; i < 9; i++) {
        box = document.getElementsByClassName('box')[i]
        box.innerHTML = ''
        box.style = '';
    }
    // titleText style remove
    titleText = document.getElementById('titleText')
    titleText.style = ''
}
// TitleText Display & style Remove
function TitleDisplayStyleRemove() {
    titleText = document.getElementById('titleText')
    titleText.style = ''
}
// Result display and style remove
function resultCounterDisplayRemove() {
    resultDisplay = document.getElementById('resultDisplay')
    resultDisplay.style = ''
}
// UI Change Segment
// BackGround Change
backgroundChange = () => {
    bodyCont = document.getElementById('body')
    userText = prompt('Enter your favourite color name, color code, rgb, hsl. What Your Choice!')
    bodyCont.style.backgroundColor = `${userText}`
}
// Font Family Change
fontFamily = () => {
    bodyCont = document.getElementById('body')
    userText = prompt('Enter your favourite font name. What Your Choice!')
    bodyCont.style.fontFamily = `${userText}`
}
// Font Color Change
fontColor = () => {
    bodyCont = document.getElementById('body')
    userText = prompt('Enter your favourite color name, color code, rgb, hsl. What Your Choice!')
    bodyCont.style.color = `${userText}`
}
// // BackGround Image adding
// const fileInput = document.getElementById('file-input');
// fileInput.addEventListener('change', backgroundChange = (e) => {
//     bodyCont = document.getElementById('body')
//     // img.src = `${prompt()}`
//     img = (e.target.files[0].name);
//     bodyCont.style.backgroundImage = `url('.A/Photography Collection/canyon-gfd9b8ffcc_1920.jpg')`
//     console.log(e.target.files[0].mozFullPath)
// });
// Music Section
// Sound On/Off
if (document.getElementById('music').innerHTML) {
    var musicInnerHtml = document.getElementById('music').innerHTML
}
function SoundOn() {
    soundOn = document.getElementById('soundOn')
    if (soundOn) {
        music = document.getElementById('music')
        music.innerHTML = `${musicInnerHtml}`
    }
    soundOn.style.backgroundColor = 'red'
    document.getElementById('soundOff').style.backgroundColor = 'green'
}
function SoundOff() {
    soundOff = document.getElementById('soundOff')
    if (soundOff) {
        music = document.getElementById('music')
        music.innerHTML = ''
        soundOff.style.backgroundColor = 'red'
        document.getElementById('soundOn').style.backgroundColor = 'green'
    }
}
// Play Music Button from UI Change
const playMusicFunc = () => {
    music = document.getElementById('playMusic')
    music.play()
    music.style.display = 'block'
}

// About Author
aboutAuthor = (e) => {
    preferDis = document.getElementById('preferDis')
    preferDis.style = ''
    preferDis.innerHTML = ''
    gameAuthor = document.getElementById('about')
    gameAuthor.style.display = 'block'
    gameAuthor.style.cursor = 'pointer'
}
gameAuthor = document.getElementById('gameAuthor')
gameAuthor.addEventListener('click', gameAuthorRemv = () => {
    gameAuthor.style.display = 'none'
})

// Starting Game From here
startGame()