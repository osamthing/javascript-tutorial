/*
スコープチェーン
└── 変数オブジェクト
    ├── グローバルオブジェクト
    └── コールオブジェクト
*/
function closure(initVal){
  var count = initVal;
  var innerFunc = function(){
      return ++count;
  };
  return innerFunc;
}
var myClosure = closure(100);
console.log(myClosure());
  //101
console.log(myClosure());
  //102
console.log(myClosure());
  //103

// console.log(closure(100)());
//   //101
// console.log(closure(100)());
//   //102
// console.log(closure(100)());
//   //103
{
  const hoge = 1
}
{
  const hoge = 2
}
console.log(hoge);

// ES5ではスコープは閉じてない
if(true){
  var hoge = 1
}
// ES6ではletでスコープは閉じる
if(true){
  var hoge = 1
}


console.log(hoge)

