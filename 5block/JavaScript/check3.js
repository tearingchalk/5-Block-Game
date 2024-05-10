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

function insert(n, m) {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(n);
        n += m;
    }
    return arr;
}

function f(selected) {
    let arr = [];
    for (let i = 1; i <= 8; i++) {
        switch (i) {
            case 1:
                arr.push(insert(selected, -10));
                break;
            case 2:
                arr.push(insert(selected, -11));
                break;
            case 3:
                arr.push(insert(selected, -1));
                break;
            case 4:
                arr.push(insert(selected, 9));
                break;
            case 5:
                arr.push(insert(selected, 10));
                break;
            case 6:
                arr.push(insert(selected, 11));
                break;
            case 7:
                arr.push(insert(selected, 1));
                break;
            case 8:
                arr.push(insert(selected, -9));
                break;
            default:
                break;
        }
    }
    return arr;
}

console.log(f(54));
