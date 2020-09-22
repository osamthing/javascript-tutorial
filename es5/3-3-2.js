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
  return this.prop1;
}
var obj1 = new myFunc();
// var obj1 = new myFunc();
var obj2 = myFunc();
console.log(obj1.method()); //barfoo
// console.log(obj2.method()); //エラーになる
console.log(obj2);


var myFunc2 = {
  prop1:'bar',
  prop2:'foo',
  method:function(){
    return this.prop1+this.prop2;
  }
  // return this.prop1;
}
var obj3 = myFunc2();
console.log(obj3.method());
