const board = [];

for (let i = 0; i < 15; i++) {
    const temp = [];
    for (let j = 0; j < 15; j++) {
        temp.push(`${i * 15 + j}`.padStart(2, '0'));
    }
    board.push(temp);
}

function printArray(board) { 
    board.forEach(line => console.log(JSON.stringify(line)));
}

// board.forEach(line => console.log(JSON.stringify(line)));

function caseData(sr, sc, step) {
    const result = [];
    // console.log('caseData', sr, sc, step);
    sr -= step[0];
    sc -= step[1];
    // 먼저 step 원소만큼 빼주는 이유:
    // for문 실행 후 result배열에 push하기 전
    // step원소 값을 먼저 더하므로 for문 실행 전 값을 빼준다.
    // console.log('src', sr, sc);
    for (let i = 0; i < 9; i++) {
        sr += step[0];
        sc += step[1];
        // console.log('sr, sc', sr, sc);
        if (sr < 0 || sr > 14) {
            // console.log('sr', sr);
            continue;
        }
        if (sc < 0 || sc > 14) {
            // console.log('sc', sc);
            continue;
        }

        result.push(board[sr][sc]);
        // console.log('result', result);
    }

    return result;
}

function f(selected) {
    console.log('selected', selected);
    const row = Math.floor(selected / board.length);
    const col = selected % board.length;
    // console.log('f', selected, row, col, col - 4);

    // 가로
    let r = caseData(row, col - 4, [0, 1]);
    console.log('r', r);
    // 세로
    r = caseData(row - 4, col, [1, 0]);
    console.log('r', r);
    // 왼쪽 위 오른쪽 아래
    r = caseData(row - 4, col - 4, [1, 1]);
    console.log('r', r);
    // 오른쪽 위 왼쪽 아래
    r = caseData(row - 4, col + 4, [1, -1]);
    console.log('r', r);
}


for (let j = 0; j < 15; j++) {
    console.log(f(j));
}


// console.log(f(0));
// console.log(f(12));
// console.log(f(110));
// console.log(f(54));
// console.log(f(43));
// console.log(f(30));
// console.log(f(79));
