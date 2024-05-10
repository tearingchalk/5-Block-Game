let arr = [];
for (let i = 0; i < 15; i++) {
    let temp = [];
    for (let j = 0; j < 15; j++) {
        temp.push(i * 15 + j);
    }
    arr.push(temp);
}

console.log(arr, arr.length);
const a = Math.floor(54 / arr.length);
const b = 54 % arr.length;
console.log(a, b, arr[a][b]);
