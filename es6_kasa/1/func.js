/*
// 関数宣言
function 関数名(仮引数1, 仮引数2) {
    // 関数が呼び出されたときの処理
    // ...
    return 関数の返り値;
}
// 関数呼び出し
const 関数の結果 = 関数名(引数1, 引数2);
console.log(関数の結果); // => 関数の返り値
*/

function func (val1, val2) {
    let ret;
    ret = val1 + val2;
    return ret;
}

const val = func("1");
console.log(val);
console.log(func(1));
console.log(func("a",1));

function func2 (val1) {
    console.log(val1);
}

console.log(func2("A"));

// Rest parameters
console.log();
function fn1(...args) {
    console.log(args);
}
fn1("a", "b", "c");

// arguments
function fn2() {
    console.log(arguments);
}
fn2("d", "e", "f");

console.log();
console.log();
console.log();
// 
let num = 0;
function fn() {
    console.log("fnが呼び出されました");
    ++num;
    console.log(num);
}
const myFunc = fn;
myFunc();
fn();

console.log();
// Arrow Function
const fnA = () => {return "OK"};
const fnB = (x) => {return x};
const fnC = x => x;
const fnD = (x,y) => {return x * y};
const mulA = x => {return x * x};
const mulB = x => x * x;
console.log(fnA(1));
console.log(fnB(1));
console.log(fnC(1));
console.log(fnD(1));
console.log(mulA(1));
console.log(mulB(1));
