/*
Javascriptの関数は、newするとその関数(無名関数)のメンバをすべて返すが、
newしないで、そのまんま呼び出す場合はreturnした値のみしか変えらない。undefineになる。
*/
var myFunc = function(){
  this.prop1 = 'foo';
  this.prop2 = 'bar';
  this.prop3 = 'baz';
  // return this.prop1;
}
var obj1 = new myFunc();
var obj2 = myFunc();
console.log(obj1);  //myFunc{prop1:"bar"}
console.log(obj2);  //undefined

