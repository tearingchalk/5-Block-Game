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

let temp = 0;

init();

function init() {
    for (let i = 0; i < N; i++) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        let arr_temp = [];
        for (let j = 0; j < N; j++) {
            const matrix = document.createElement('li');
            temp += 1;
            matrix.textContent = temp;
            matrix.classList.add('n' + temp);
            ul.append(matrix);
            arr_temp.push(temp);
        }
        li.append(ul);
        li.classList.add('move' + i);
        board.append(li);
        arr.push(arr_temp);
    }   
}

console.log('arr', arr);

checkMatch();

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i, arr[i]);
    }
}

function draw() {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const target = board.childNodes[i].childNodes[0].childNodes[j];
            target.addEventListener("click", function() {
                if (this.classList.contains('draw-black') || this.classList.contains('draw-white')) {
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

function nodes(result=[]) {
    console.log(result);
    let nodelist = [];



    for (let i = 0; i < result.length; i++) {
        console.log('i', i, result[i]);
        for (let j = 0; j < result[i].length; j++) {
            let temp = [];
            for (let n = 0; n < arr.length; n++) {
                for (let m = 0; m < arr[i].length; m++) {
                    if (arr[i][j] === result[i]) {
                        temp.push(board.childNodes[i].childNodes[0].childNodes[j]);
                    }
                }
                if (temp.length === 4) {
                    console.log('-----');
                    nodelist.push(temp);
                    break;
                }
            }
        }
    }

    return nodelist;
    // for (let i = 0; i < result.length; i++) {
    //     for (let j = 0; j < result[i].length; j++) {
    //         for (let n = 0; n < N; n++) {
    //             // console.log('00', n, board.childNodes[n].childNodes[0]);
    //             // const target = board.childNodes[n].childNodes[0].childNodes[j];

    //             // if (target) {
    //             //     nodelist.push(target);
    //             // }
    //         }
    //     }
    // }
    // // console.log('nodelist', nodelist);
}

nodes();

function isTrue(a, b, c, d) {
    const arr = [a, b, c, d];
    console.log('isTrue', arr);
    let result = [];
    let bool = true;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] >= 225) {
                bool = false;
                break;
            }
        }

        if (bool) {
            result.push(arr[i]);
        } else {
            continue;
        }
    }
    return result;
}

function getClassList(result, tag, i) {
    console.log('result', result);
    let count = 1;
    let nodelist = [];
    const _tag = tag.querySelector('.move' + i);
    const t = _tag.querySelector('ul');
    console.log('tag', _tag, t);

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            const node = t.querySelector('.n' + result[i][j]);
            nodelist.push(node);
        }
    }

    console.log('nodes', nodelist);
}


function checkMatch() {
    let count = 1;

    const tag = document.querySelector('.container > .board > ul');
    const line = {
        a: [],
        b: [],
        c: [],
        d: []
    };

    for (let i = 0; i < 15; i++) { // y축 각각 한 줄
        for (let j = 0; j < 15; j++) { // x축 각각 한 칸
            line.a = [];
            line.b = [];
            line.c = [];
            line.d = [];
            const numlib = {
                a: count,
                b: count,
                c: count,
                d: count
            };
            for (let n = 0; n < Object.entries(numlib).length + 1; n++) {
                let idx = cross[1][i];
                let _idx = cross[0][i];
                line.a.push(numlib.a);
                line.b.push(numlib.b);
                numlib.a += 15;
                numlib.b += 1;
        

                if (count <= idx) {
                    line.c.push(numlib.c);
                    numlib.c += 16;
                }

                if (count >= _idx) {
                    line.d.push(numlib.d);
                    numlib.d += 14;
                }
            }
            
            count += 1
            
            const result = isTrue(line.a, line.b, line.c, line.d);
            let node = nodes(result); // result 배열 원소에 해당하는 클래스를 가진 태그를 불러온다
            console.log('node', node);
            // nodeCompare(); // nodes() 함수로 가져온 태그들이 모두 같은 클래스를 가지고 있는지 비교한다

        }
    }
}


board.addEventListener('click', draw());