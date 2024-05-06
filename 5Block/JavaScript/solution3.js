// 1. css 공부 완성
// 2. css파일 작성 완료
// 3. 게임 구상

// 1. 보드판을 15x15 크기로 만든다.
// 2. 클릭 이벤트를 받는 이벤트 리스너를 추가한다
// 3. board의 childNodes에서 클릭한 태그 불러온다.



const board = document.querySelector('.container > .board > ul');
const N = 15;
let temp = 0;

for (let i = 0; i < N; i++) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    for (let j = 0; j < N; j++) {
        const matrix = document.createElement('li');
        temp += 1;
        matrix.textContent = temp;
        matrix.classList.add(temp);
        ul.append(matrix);
    }
    li.append(ul);
    board.append(li);
}

console.log(board);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        const target = board.childNodes[i].childNodes[0].childNodes[j];
        target.addEventListener("click", function() {
            console.log(this);
        })
    }
    
}

board.addEventListener("click", function() { // 마진 클릭은 안읽음
    
})

