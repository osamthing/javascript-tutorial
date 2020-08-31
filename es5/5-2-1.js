// プロトタイプ
// 共通のメソッドはプロトタイプに持たせた方がメモリの削減になる。

var Phone = function(name){
  this.name = name;
};
Phone.prototype.getName = function(){
  return this.name;
};
var featurePhone = new Phone('featurephone');
var smartPhone = new Phone('smartphone');


console.log(featurePhone.getName());  //featurephone
console.log(smartPhone.getName());  //smartphone

