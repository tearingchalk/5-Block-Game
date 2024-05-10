
const obj = {
    a: 10,
    b: 20,
    c: 30,
}

const obj2 = obj;
obj2.b = 100;
console.log(obj);
console.log(obj2);

const obj3 = {
    a: obj.a,
    b: obj.b,
    c: obj.c
}

obj3.b = 300;
console.log(obj);

const obj4 = {...obj}

const a = [1, 2, 3];
const b = [...a];
console.log(b);