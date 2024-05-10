const board = [];

for (let i = 0; i < 10; i++) {
    const temp = [];
    for (let j = 0; j < 10; j++) {
        temp.push(`${i * 10 + j}`.padStart(2, '0'));
    }
    board.push(temp);
}
// console.log(board);
// board.forEach(line => console.log(JSON.stringify(line)));

let arr = []
for (let i = 0; i < 15; i++) {
    let temp = [];
    for (let j = 1; j <= 15; j++) {
        temp.push(i * 15 + j);
    }
    arr.push(temp);
}

console.log(arr);

function f(selected) {
    const row = Math.floor(selected / board.length);
    const col = selected % board.length;
    console.log(selected, row, col);
    let arr = [];

    for (let i = 0; i < 4; i++) {
        let temp = [];
        switch (i) {
            case 0:
                temp.push(board[row - 1][col - 1], board[row][col], board[row + 1][col + 1]);
                arr.push(temp);
                break;
            case 1:
                temp.push(board[row - 1][col], board[row][col], board[row + 1][col]);
                arr.push(temp);
                break;
            case 2:
                temp.push(board[row][col - 1], board[row][col], board[row][col + 1]);
                arr.push(temp);
                break;
            case 3:
                temp.push(board[row + 1][col - 1], board[row][col], board[row - 1][col + 1]);
                arr.push(temp);
                break;
            default:
                break;
        }
        // console.log(i, arr);
    }
    return arr;
}


console.log(f(54));
console.log(f(43));
console.log(f(30));
console.log(f(79));
