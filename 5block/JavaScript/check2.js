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
    let arr = [];
    for (let i = 1; i <= 8; i++) {
        let num = selected;
        let temp = [];
        for (let j = 0; j < 5; j++) {
            switch (i) {
                case 1:
                    temp.push(num);
                    num += -10;
                    break;
                case 2:
                    temp.push(num);
                    num += -11;
                    break;
                case 3:
                    temp.push(num);
                    num += -1;
                    break;
                case 4:
                    temp.push(num);
                    num += 9;
                    break;
                case 5:
                    temp.push(num);
                    num += 10;
                    break;
                case 6:
                    temp.push(num);
                    num += 11;
                    break;
                case 7:
                    temp.push(num);
                    num += 1;
                    break;
                case 8:
                    temp.push(num);
                    num += -9;
                    break;
                default:
                    break;
            }
        }
        // console.log('temp', temp);
        arr.push(temp);
    }
    return arr;
}

console.log(f(54));
