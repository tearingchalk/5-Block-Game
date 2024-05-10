const board = document.querySelector('.container > .board > ul');
const gameText = document.querySelector('.container > .game-text');
const restartButton = document.querySelector('.game-text > button');
const win = document.querySelector('.game-text > .win');

const N = 15;
let turn = 0;
const nodes = [];

init();
// draw();
function init() {
    for (let i = 0; i < N; i++) {
        let temp = [];
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        for (let j = 0; j < N; j++) {
            const matrix = document.createElement('li');
            matrix.textContent = i * 15 + j;
            matrix.classList.add('hidden');
            ul.append(matrix);
            temp.push(matrix);
        }
        li.append(ul);
        board.append(li);
        nodes.push(temp);
    }
    // draw();
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
        result.push(nodes[sr][sc]);
    }
    return result;
}

function winner(score) {
    if (score[0] === 5) {
        console.log('Black win');
        win.textContent = '흑돌 승';
    } else {
        console.log('White win');
        win.textContent = '백돌 승';
    }
}

function checkLine(line) {
    let arr = [];
    for (let i = 0; i < line.length; i++) {
        arr.push(line[i]);
        if (arr.length === 5) {
            let score = [0, 0];
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].classList.contains('draw-black')) {
                    score[0] += 1;
                } else if (arr[j].classList.contains('draw-white')) {
                    score[1] += 1;
                }
            }
            if (score[0] === 5 || score[1] === 5) {
                console.log('Game Over');
                winner(score);
                return true;
            }
            arr.shift();
        }
    }
}

function getLines(selected) {
    const row = Math.floor(selected / nodes.length);
    const col = selected % nodes.length;

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


function draw() {
    for (let i = 0; i < N; i++) {
        nodes[i].forEach(target => {
            target.addEventListener("click", function() {
                console.log('target');
                if (this.classList.contains('draw-black') || this.classList.contains('draw-white')) {
                    return true;
                }
                if (turn === 0) {
                    this.classList.add('draw-black');
                    turn = 1;
                } 
                else {
                    this.classList.add('draw-white');
                    turn = 0;
                }
                getLines(Number(target.textContent));
            });
        });
    }
}


function showGameOver() {
    const gametext = document.querySelector('.game-text');
    gametext.style.display = "flex";
}

restartButton.addEventListener('click', function() {
    board.innerHTML = "";
    gameText.style.display = "none";
    init();
})

board.addEventListener('click', function(event) {
    // draw();
    // console.log('click', event.target, event.currentTarget);
    console.log('click', event.target);
    
    if (event.target.classList.contains('draw-black') || event.target.classList.contains('draw-white')) {
        return true;
    }
    if (turn === 0) {
        event.target.classList.add('draw-black');
        turn = 1;
    }
    else {
        event.target.classList.add('draw-white');
        turn = 0;
    }
    getLines(Number(target.textContent));
});


