// while
let x = 0;
console.log(`ループ開始前のxの値: ${x}`);
while (x < 10) {
    console.log(x);
    x += 1;
}
console.log(`ループ終了後のxの値: ${x}`);

// do while
const y = 1000;
do {
    console.log(y);
} while (y < 10);

// for
let total = 0;
for (let i = 0; i < 10; i++) {
    total += i + 1;
}
console.log(total);

// forEach
const array = [1, 2, 3];
array.forEach(z => {
    console.log(z);
});

// for...in
const obj = {
    "a": 1,
    "b": 2,
    "c": 3
};
for (const key in obj) {
    const value = obj[key];
    console.log(`key:${key}, value:${value}`);
}

Object.keys(obj).forEach(key => {
    const value = obj[key];
    console.log(`key:${key}, value:${value}`);
});

const array3 = [1, 2, 3];
for (const value of array3) {
    console.log(value);
}
