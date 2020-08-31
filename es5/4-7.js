/*
スコープチェーン
└── 変数オブジェクト
    ├── グローバルオブジェクト
    └── コールオブジェクト
*/

// グローバルはそのままグローバルで、ブラウザー上ではwindowオブジェクトから参照できる。
// 端末上ではエラーなるけど。
var a = 'foo';
// console.log(window.a);

var x = 'Global';
var y = 'Global';
function outerFunc() {
  var x = 'LocalOuter';
  function innerFunc() {
    var x = 'LocalInner';
    //LocalInner①
    console.log(x);
    //Global②
    console.log(y);
    //undefined③
    // console.log(z);
  }
  //LocalOuter④
  console.log(x);
  innerFunc();
}
//Global⑤
// console.log(x);
outerFunc();


