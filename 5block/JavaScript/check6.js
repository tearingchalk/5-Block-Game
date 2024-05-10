const board = [];

for (let i = 0; i < 5; i++) {
    const temp = [];
    for (let j = 0; j < 5; j++) {
        temp.push(`${i * 5 + j}`.padStart(2, '0'));
    }
    board.push(temp);
}
// console.log(board);
board.forEach(line => console.log(JSON.stringify(line)));

function caseData(sr, sc, step) {
    const result = [];
    console.log('caseData', sr, sc, step);
    sr -= step[0];
    sc -= step[1];
    console.log('src', sr, sc);
    for (let i = 0; i < 5; i++) {
        sr += step[0];
        sc += step[1];
        console.log('sr, sc', sr, sc);
        if (sr < 0 || sr > 4) {
            console.log('sr', sr);
            continue;
        }
        if (sc < 0 || sc > 4) {
            console.log('sc', sc);
            continue;
        }

        // console.log(sr, sc, board[sr][sc]);
        result.push(board[sr][sc]);
        console.log('result', result);
        // sr += step[0];
        // sc += step[1];
    }

    return result;
}

function f(selected) {
    const row = Math.floor(selected / board.length);
    const col = selected % board.length;
    console.log(selected, row, col, col - 2);

    // 가로
    let r = caseData(row, col - 2, [0, 1]);
    console.log('r', r);
    // 세로
    r = caseData(row - 2, col, [1, 0]);
    console.log('r', r);
    // 왼쪽 위 오른쪽 아래
    r = caseData(row - 2, col - 2, [1, 1]);
    console.log('r', r);
    // 오른쪽 위 왼쪽 아래
    r = caseData(row - 2, col + 2, [1, -1]);
    console.log('r', r);
}



console.log(f(11));
// console.log(f(12));
// console.log(f(10));
// console.log(f(14));
// console.log(f(24));
// console.log(f(17));
// console.log(f(110));
// console.log(f(54));
// console.log(f(43));
// console.log(f(30));
// console.log(f(79));
// console.log(f(999));
