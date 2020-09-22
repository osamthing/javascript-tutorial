/*
const let
*/

// const hoge = 'hoge';
// hoge = 'fuga';  //エラー

let hoge = 'hoge';
hoge = 'fuga';  //エラー
console.log(hoge);


// 再代入禁止
const arr = [1,3,5];
arr[0] = 2;
console.log(arr);  //[2.3,5]

