/*
Javascriptの関数は、newするとその関数(無名関数)のメンバをすべて返すが、
newしないで、そのまんま呼び出す場合はreturnした値のみしかかえらない。undefineになる。
*/
var myFunc = function(){
  this.prop1 = 'foo';
  this.prop2 = 'bar';
  this.prop3 = 'baz';
  // return this.prop1;
}
var obj1 = new myFunc(); //オブジェクトを入れている（コンストラクタが実行されている）
var obj2 = myFunc(); //返ったものを格納している

// var obj2 = myFunc(){
//   // asdgsg
//   // sdfgds
//   // sdfgdsg
//   return foo;
// }

console.log(obj1);  //myFunc{prop1:"bar"}
console.log(obj2);  //undefined

