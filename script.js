const tableDOM = document.querySelector('.table');
const divsDOM = document.querySelectorAll('.table div');
const humanSpan = document.querySelector('#human-result');
const computerSpan = document.querySelector('#computer-result');
const h1DOM = document.querySelector('h1');
let selectedIndex = [];
let availableIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let whoWon = [];
let humanResult = 0;
let computerResult = 0;

function mainFunc(index) {    
    const firstPlayer = whoGoesFirst();
    if (firstPlayer == "human") {
        // functions
        humanChoice(index);    
        computerLogic(randomInt());
        winner();
        if (whoWon[0] == "human") {
            humanResult ++;
            whoWon = [];
            humanSpan.textContent = humanResult;
            h1DOM.textContent = "Human Won";
            availableIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            resetTable();
        } else if (whoWon[0] == "computer") {
            computerResult ++;
            whoWon = [];
            h1DOM.textContent = "Computer Won";
            computerSpan.textContent = computerResult;
            availableIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            resetTable();
        } else if (availableIndex.length === 0) {
            whoWon = [];
            h1DOM.textContent = "It's tie";
            availableIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            resetTable();
        }
    } else {
        // functions
        computerLogic(randomInt());
        humanChoice(index);  
        winner();
        if (whoWon[0] == "human") {
            humanResult ++;
            whoWon = [];
            humanSpan.textContent = humanResult;
            h1DOM.textContent = "Human Won";
            availableIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            resetTable();
        } else if (whoWon[0] == "computer") {
            computerResult ++;
            whoWon = [];
            h1DOM.textContent = "Computer Won";
            computerSpan.textContent = computerResult;
            availableIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            resetTable();
        } else if (availableIndex.length === 0) {
            whoWon = [];
            h1DOM.textContent = "It's tie";
            availableIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            resetTable();
        }
    }
}

const whoGoesFirst = function() {
    let randomPlayer = Math.floor(Math.random() * 2);
    if (randomPlayer === 0) {
        return ["human"] ;  
    } else {
        return ["computer"];
    }
}

function humanChoice(place) {
    const placeID = place.id ;
    place.classList.add("x"); 
    for (let i = 0; i < availableIndex.length; i++) {
        if (availableIndex[i] == placeID) {
            availableIndex.splice(i, 1);
            selectedIndex.push(placeID);
        }
    }
}

const computerLogic = function(int) {
    for (let i = 0; i < availableIndex.length; i++) {
        if (availableIndex[i] == divsDOM[int].id) {
            divsDOM[int].classList.add("o");
            availableIndex.splice(i, 1);
            selectedIndex.push(int);
        }
    }
}

const randomInt = function() {
    let int = availableIndex[Math.floor(Math.random() * availableIndex.length)];
    return int; 
}

const winner = function() {
    let d = divsDOM;
    if (d[0].className === "x" && d[1].className === "x" && d[2].className === "x") {
        whoWon.push("human");
    } else if (d[3].className === "x" && d[4].className === "x" && d[5].className === "x") {
        whoWon.push("human");
    } else if (d[6].className === "x" && d[7].className === "x" && d[8].className === "x") {
        whoWon.push("human");
    } else if (d[0].className === "x" && d[3].className === "x" && d[6].className === "x") {
        whoWon.push("human");
    } else if (d[1].className === "x" && d[4].className === "x" && d[7].className === "x") {
        whoWon.push("human");
    } else if (d[2].className === "x" && d[5].className === "x" && d[8].className === "x") {
        whoWon.push("human");
    } else if (d[0].className === "x" && d[4].className === "x" && d[8].className === "x") {
        whoWon.push("human");
    } else if (d[6].className === "x" && d[4].className === "x" && d[2].className === "x") {
        whoWon.push("human");
    } else if (d[3].className === "x" && d[4].className === "x" && d[5].className === "x") {
        whoWon.push("human");        
        
        // computer side

    } else if (d[0].className === "o" && d[1].className === "o" && d[2].className === "o") {
        whoWon.push("computer");
    } else if (d[3].className === "o" && d[4].className === "o" && d[5].className === "o") {
        whoWon.push("computer");
    } else if (d[6].className === "o" && d[7].className === "o" && d[8].className === "o") {
        whoWon.push("computer");
    } else if (d[0].className === "o" && d[3].className === "o" && d[6].className === "o") {
        whoWon.push("computer");
    } else if (d[1].className === "o" && d[4].className === "o" && d[7].className === "o") {
        whoWon.push("computer");
    } else if (d[2].className === "o" && d[5].className === "o" && d[8].className === "o") {
        whoWon.push("computer");
    } else if (d[0].className === "o" && d[4].className === "o" && d[8].className === "o") {
        whoWon.push("computer");
    } else if (d[6].className === "o" && d[4].className === "o" && d[2].className === "o") {
        whoWon.push("computer");
    } else if (d[3].className === "o" && d[4].className === "o" && d[5].className === "o") {
        whoWon.push("computer");
    }
}

const resetTable = async function() {
    await sleep(3000);
    for (let i = 0; i < divsDOM.length; i++) {
        divsDOM[i].classList.remove("o", "x");
    }
    h1DOM.textContent = "Tic-Tac-Toe";
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))