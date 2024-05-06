// 1. css 공부 완성
// 2. css파일 작성 완료
// 3. 게임 구상

// 1. 보드판을 15x15 크기로 만든다.
// 2. 클릭 이벤트를 받는 이벤트 리스너를 추가한다
// 3. board의 childNodes에서 클릭한 태그 불러온다.
// 4. css에서 흰돌, 검은돌 이미지 각각 두개를 정의내린다.
// 5. 대각선, 세로, 가로로 색깔이 같은 돌이 5칸 연속적으로 차있는지 판별


const board = document.querySelector('.container > .board > ul');
const N = 15;
let click = 0;
let temp = 0;

init();

function init() {
    for (let i = 0; i < N; i++) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        for (let j = 0; j < N; j++) {
            const matrix = document.createElement('li');
            temp += 1;
            matrix.textContent = temp;
            matrix.classList.add(temp);
            ul.append(matrix);
        }
        li.append(ul);
        board.append(li);
    }   
}

checkMatch();

console.log(board);

function draw() {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const target = board.childNodes[i].childNodes[0].childNodes[j];
            target.addEventListener("click", function() {
                if (this.classList.contains('draw-black') || this.classList.contains('draw-white')) {
                    console.log('return');
                    return true;
                }
                if (click === 0) {
                    this.classList.add('draw-black');
                    click = 1;
                } 
                else {
                    this.classList.add('draw-white');
                    click = 0;
                } 
            })
        }
    }
}



function checkMatch() {
    const line = {
        a: [],
        b: [],
        c: [],
        d: []
    };

    
    for (let i = 1; i <= 225; i++) {
        const numlib = {
            a: i,
            b: 0,
            c: 0,
            d: 0
        };
        for (let j = 0; j < 5; j++) {
            const tag = document.querySelector('.container > .board > ul');
            // if (!document.querySelector()) {
            //     break;
            // }
            line.a.push(numlib.a);
            numlib.a += 15;
        }
        console.log(i, line['a']);
        line.a = [];
    } 
}

for (let i = 0; i < N; i++) {
    
}

console.log(board.classList);