// プロトタイプ
// 共通のメソッドはプロトタイプに持たせた方がメモリの削減になる。

var Phone = function(name){
  this.name = name;//
};
Phone.prototype.getName = function(){
  return this.name;//
};
// prototype
var featurePhone = new Phone('featurephone');
var smartPhone = new Phone('smartphone');

console.log(featurePhone.getName());  //featurephone
console.log(smartPhone.getName());  //smartphone


// prototypeを使わない
var Bar = function(foo){
  this.foo = foo;
  this.getName = function(){
    return this.name;
  }
};
var hoge = new Bar('baz');
console.log(hoge);
console.log(hoge.getName('baz'));


