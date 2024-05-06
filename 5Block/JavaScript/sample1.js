const result = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9],]
let node = [];

for (let i = 0; i < result.length; i++) {
    console.log('i', result[i]);
    for (let j = 0; j < result[i].length; j++) {
        console.log('j', result[i][j]);
        let temp = [];
        for (let n = 0; n < arr.length; n++) {
            console.log('n', arr[n]);
            for (let m = 0; m < arr[i].length; m++) {
                console.log('m', arr[n][m]);
                if (arr[n][m] === result[i][j]) {
                    console.log('---', result[i][j], arr[i][j]);
                    temp.push(i);
                    temp.push(j);
                    // temp.push(board.childNodes[i].childNodes[0].childNodes[j]);
                }
            }

            console.log('temp', temp);

            if (temp.length > 0) {
                console.log('-----');
                node.push(temp);
            // break;
            }
        }
    }
}

console.log('node', node);