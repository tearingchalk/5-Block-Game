// 1. css 공부 완성
// 2. css파일 작성 완료
// 3. 게임 구상

// 1. 보드판을 15x15 크기로 만든다.
// 2. 



const board = document.querySelector('.container > .board > ul');
const N = 15;

for (let i = 0; i < N; i++) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    for (let j = 0; j < N; j++) {
        const matrix = document.createElement('li');
        matrix.classList.add(i);
        matrix.classList.add(j);
        matrix.textContent = [i, j];
        console.log(matrix, matrix.classList);
        ul.append(matrix);
    }
    li.append(ul);
    board.append(li);
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        // const btn = document.querySelector()?
    }
}

board.addEventListener('click', function(event) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {

        }
    }
    
})
