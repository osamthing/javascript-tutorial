// プロトタイプ
// 共通のメソッドはプロトタイプに持たせた方がメモリの削減になる。

var Phone = function(name){
  this.name = name;
};

var featurePhone = new Phone('featurephone');

Phone.prototype.getName = function(){
  return this.name;
};

var smartPhone = new Phone('smartphone');


console.log(featurePhone.getName());  //featurephone
console.log(smartPhone.getName());  //smartphone

