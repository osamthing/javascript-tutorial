/*
これは難しい。
new演算子を用いて呼び出された場合はreturnがなくてもその関数の値を返す。


*/
var myFunc = function(){
  this.prop1 = 'bar';
  this.prop2 = 'foo';
  this.method = function(){
    return this.prop1+this.prop2;
  }
}
var obj1 = new myFunc();
var obj2 = myFunc();
console.log(obj1.method()); //barfoo
// console.log(obj2.method()); //エラーになる
console.log(obj1.prop1);
