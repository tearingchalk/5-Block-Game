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
const arr = [];
const cross = [];

for (let i = 5; i < 12; i+=6) {
    let num = i;
    let temp = [num];
    for (let j = 0; j < 14; j++) {
        num += 15;
        temp.push(num);
    }
    cross.push(temp)
}

console.log('cross', cross);
let temp = 0;

board_init();

function board_init() {
    for (let i = 0; i < N; i++) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        for (let j = 0; j < N; j++) {
            const matrix = document.createElement('li');
            temp += 1;
            arr.push(temp);
            matrix.textContent = temp;
            matrix.classList.add('m' + temp);
            ul.append(matrix);
        }
        li.append(ul);
        li.classList.add('move' + i);
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
                    // console.log('return', this.classList);
                    return true;
                }
                if (click === 0) {
                    this.classList.add('draw-black');
                    // console.log(this.textContent, this.classList);
                    click = 1;
                } 
                else {
                    this.classList.add('draw-white');
                    // console.log(this.textContent, this.classList);
                    click = 0;
                } 
            })
        }
    }
}

function isTrue(a, b, c, d) {
    console.log('isTrue_line', a, b, c, d);
}

function checkMatch() {
    const line = {
        a: [],
        b: [],
        c: [],
        d: []
    };

    
    for (let i = 0; i < 225; i++) {
        line.a = [];
        line.b = [];
        line.c = [];
        line.d = [];
        const numlib = {
            a: i + 1,
            b: i + 1,
            c: i + 1,
            d: i + 1
        };
        for (let j = 0; j < Object.entries(numlib).length + 1; j++) {
            let n = i + 1;
            line.a.push(numlib.a);
            line.b.push(numlib.b);
            numlib.a += 15;
            numlib.b += 1;
            
            console.log('lines', i, n, cross[1][i]);

            if (n <= cross[1][i]) {
                line.c.push(numlib.c);
                numlib.c += 16;
            }

            if (n >= cross[0][i]) {
                line.d.push(numlib.d);
                numlib.d += 14;
            }
        }
        
        console.log(i);
        console.log(line.a);
        console.log(line.b);
        console.log(line.c);
        console.log(line.d);
        // console.log(arr.indexOf(line.a[line.a.length - 1]));
        
        isTrue(line.a, line.b, line.c, line.d);

    } 
}

let num = 0;
const tag = document.querySelector('.container > .board > ul');
for (let i = 0; i < N; i++) {
    const _tag = tag.querySelector('.move' + i);
    const t = _tag.querySelector('ul');
    for (let j = 1; j <= N; j++) {
        num += 1;
        const __tag = t.querySelector('.m' + num);
        // console.log('__tag', __tag, __tag.classList);
    }
}

// console.log(board.classList);

board.addEventListener('click', draw());
