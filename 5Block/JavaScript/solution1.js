
const board = document.querySelector('.container > .board > ul');

for (let i = 0; i < 15; i++) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    for (let j = 0; j < 15; j++) {
        const matrix = document.createElement('li');
        ul.append(matrix);
    }
    li.append(ul);
    board.append(li);
}

console.log('board', board);