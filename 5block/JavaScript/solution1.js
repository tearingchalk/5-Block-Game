// 1. css 공부 완성
// 2. css파일 작성 완료
// 3. 게임 구상

// 1. 보드판을 15x15 크기로 만든다.
// 2. 클릭 이벤트를 받는 이벤트 리스너를 추가한다
// 3. board의 childNodes에서 클릭한 태그 불러온다.
// 4. css에서 흰돌, 검은돌 이미지 각각 두개를 정의내린다.
// 5. 대각선, 세로, 가로로 색깔이 같은 돌이 5칸 연속적으로 차있는지 판별


const board = document.querySelector('.container > .board > ul');
const gameText = document.querySelector('.container > .game-text');
const restartButton = document.querySelector('.game-text > button');
// const gametext = document.getElementsByName('.container > .game-text');
const N = 15;
let turn = 0;

init();

function init() {
    for (let i = 0; i < N; i++) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        for (let j = 0; j < N; j++) {
            const matrix = document.createElement('li');
            matrix.textContent = i * 15 + j;
            // matrix.classList.add('n' + );
            ul.append(matrix);
        }
        li.append(ul);
        // li.classList.add('move' + i);
        board.append(li);
    }   
}

function checkLine(target) {
    const row = Math.floor(selected / board.length);
    const col = selected % board.length;
    console.log(selected, row, col);
    let arr = [];
    for (let i = 0; i < 4; i++) {
        let temp = [];
        switch (i) {
            case 0:
                temp.push(board[row - 2][col - 2], board[row - 1][col - 1], board[row][col], board[row + 1][col + 1], board[row + 2][col + 2]);
                arr.push(temp);
                break;
            case 1:
                temp.push(board[row - 2][col], board[row - 1][col], board[row][col], board[row + 1][col], board[row + 2][col]);
                arr.push(temp);
                break;
            case 2:
                temp.push(board[row][col - 2], board[row][col - 1], board[row][col], board[row][col + 1], board[row][col + 2]);
                arr.push(temp);
                break;
            case 3:
                temp.push(board[row + 2][col - 2], board[row + 1][col - 1], board[row][col], board[row - 1][col + 1], board[row - 2][col + 2]);
                arr.push(temp);
                break;
            default:
                break;
        }
    }
    console.log(target);
}


function draw() {
    console.log('-----')
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const target = board.childNodes[i].childNodes[0].childNodes[j];
            target.addEventListener("click", function() {
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
                // checkLine(this);
            })
        }
    }
    return true;
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


// board.addEventListener('click', draw()); // <- 한번만 실행됨