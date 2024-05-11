const board = document.querySelector('.container > .board > ul');
const gameText = document.querySelector('.container > .game-text');
const restartButton = document.querySelector('.game-text > button');
const win = document.querySelector('.game-text > .win');

const N = 15;
let turn = 0;

init();
function init() {
    for (let i = 0; i < N; i++) {
        let temp = [];
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        for (let j = 0; j < N; j++) {
            const matrix = document.createElement('li');
            matrix.textContent = i * 15 + j;
            // matrix.classList.add('hidden');
            ul.append(matrix);
            temp.push(matrix);
        }
        li.append(ul);
        board.append(li);
    }
}
console.log('board', board);

function winner(str) {
    if (str === 'black') {
        console.log('Black win');
        win.textContent = '흑돌 승';
    } else {
        console.log('White win');
        win.textContent = '백돌 승';
    }
}

function fff(arr, clsName) {
    let count = 0;
    
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].classList.contains(clsName)) {
            count += 1;
        }
    }
    
    return count;
}

function checkLine(line) {
    let arr = [];
    for (let i = 0; i < line.length; i++) {
        arr.push(line[i]);
        if (arr.length === 5) {
            if (fff(arr, 'draw-black') === 5) {
                winner('black');
                return true;
            }
            
            if (fff(arr, 'draw-white') === 5) {
                winner('white');
                return true;
            }
            
            arr.shift();
        }
    }
}

function caseData(sr, sc, step) {
    const result = [];
    sr -= step[0];
    sc -= step[1];
    for (let i = 0; i < 9; i++) {
        sr += step[0];
        sc += step[1];
        if (sr < 0 || sr > 14) {
            continue;
        }
        if (sc < 0 || sc > 14) {
            continue;
        }
        result.push(board.childNodes[sr].childNodes[0].childNodes[sc]);
    }
    return result;
}

function getLines(selected) {
    const row = Math.floor(selected / board.childNodes.length);
    const col = selected % board.childNodes.length;

    // 가로
    let r = caseData(row, col - 4, [0, 1]);
    if (checkLine(r)) {
        showGameOver();
    }
    // 세로
    r = caseData(row - 4, col, [1, 0]);
    if (checkLine(r)) {
        showGameOver();
    }
    // 왼쪽 위 오른쪽 아래
    r = caseData(row - 4, col - 4, [1, 1]);
    if (checkLine(r)) {
        showGameOver();
    }
    // 오른쪽 위 왼쪽 아래
    r = caseData(row - 4, col + 4, [1, -1]);
    if (checkLine(r)) {
        showGameOver();
    }
}

function showGameOver() {
    gameText.style.display = "flex";
}

restartButton.addEventListener('click', function() {
    turn = 0;
    gameText.style.display = "none";
    board.textContent = "";
    init();
})

board.addEventListener('click', function(event) {
    const li = document.querySelectorAll('.container > .board > ul > li > ul > li');
    let bool = false;

    for (let i = 0; i < li.length; i++) {
        if (li[i] === event.target) {
            bool = true;
            break;
        }
    }

    if (!bool) {
        return bool;
    }

    if (event.target.classList.contains('draw-black') || event.target.classList.contains('draw-white')) {
        return false;
    }

    if (turn === 0) {
        event.target.classList.add('draw-black');
        turn = 1;
    }
    else {
        event.target.classList.add('draw-white');
        turn = 0;
    }
    getLines(Number(event.target.textContent));
});


