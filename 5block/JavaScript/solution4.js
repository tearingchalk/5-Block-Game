const board = document.querySelector('.container > .board > ul');
const gameText = document.querySelector('.container > .game-text');
const restartButton = document.querySelector('.game-text > button');

const N = 15;
let turn = 0;
const nodes = [];

console.log('board', board);

init();
draw();
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
        nodes.push(temp);
    }   
}

function checkLine(line) {
    let arr = [];
    for (let i = 0; i < line.length; i++) {
        arr.push(line[i]);
        if (arr.length === 5) {
            let bool = true;
            for (let j = 0; j < arr.length; j++) {
                if (!arr[j].classList.contains('draw-black')) {
                    bool = false;
                    break;
                }
            }
            if (bool) {
                console.log('Game Over');
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
        result.push(nodes[sr][sc]);
    }
    return result;
}

function f(selected) {
    // console.log('selected', selected, nodes.length);
    const row = Math.floor(selected / nodes.length);
    const col = selected % nodes.length;
    // console.log('f', selected, row, col, col - 4);

    // 가로
    let r = caseData(row, col - 4, [0, 1]);
    console.log('r', r);
    if (checkLine(r)) {
        showGameOver();
    }
    // 세로
    r = caseData(row - 4, col, [1, 0]);
    console.log('r', r);
    if (checkLine(r)) {
        showGameOver();
    }
    // 왼쪽 위 오른쪽 아래
    r = caseData(row - 4, col - 4, [1, 1]);
    console.log('r', r);
    if (checkLine(r)) {
        showGameOver();
    }
    // 오른쪽 위 왼쪽 아래
    r = caseData(row - 4, col + 4, [1, -1]);
    console.log('r', r);
    if (checkLine(r)) {
        showGameOver();
    }
}


function draw() {
    console.log('draw');

    for (let i = 0; i < N; i++) {
        nodes[i].forEach(target => {
            target.addEventListener("click", function() {
                if (this.classList.contains('draw-black') || this.classList.contains('draw-white')) {
                    return true;
                }
                if (turn === 0) {
                    console.log('black click');
                    this.classList.add('draw-black');
                    turn = 1;
                } 
                else {
                    console.log('white click');
                    this.classList.add('draw-white');
                    turn = 0;
                }
                f(Number(target.textContent));
            });
        });
    }
}


function showGameOver() {
    const gametext = document.querySelector('.game-text');
    // console.log('gametext', gametext);
    gametext.style.display = "flex";
    // gameText.visi
}



restartButton.addEventListener('click', function() {
    board.innerHTML = "";
    gameText.style.display = "none";
    init();
})

board.addEventListener('click', function() {
    draw();
});


// board.addEventListener('click', draw()); <- 한번만 실행됨

