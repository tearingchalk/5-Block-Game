const board = [];

for (let i = 0; i < 10; i++) {
    const temp = [];
    for (let j = 0; j < 10; j++) {
        temp.push(`${i * 10 + j}`.padStart(2, '0'));
    }
    board.push(temp);
}
// console.log(board);
board.forEach(line => console.log(JSON.stringify(line)));


function f(selected) {
    const row = Math.floor(selected / board.length);
    const col = selected % board.length;

    console.log(board[row][col], board[row + 1][col + 1], board[row + 2][col + 2]);
    // return arr;
}

console.log(f(54));
console.log(f(43));
console.log(f(30));
console.log(f(79));
// 54 = board[5][4]

// 44 = board[4][4]
// 34 = board[3][4]
// 24 = board[2][4]
// 14 = board[1][4]

// 43 = board[4][3]
// 32 = board[3][2]
// 21 = board[2][1]
// 10 = board[1][0]

// 53 = board[5][3]
// 52 = board[5][2]
// 51 = board[5][1]
// 50 = board[5][0]

// 63 = board[6][3]
// 72 = board[7][2]
// 81 = board[8][1]
// 90 = board[9][0]
