/*
こういう使い方は、普通な感じでよい。
*/
var Member = function(firstName,lastName,age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getInfo = function(){
    return '氏名：'+this.lastName+''+this.firstName+'('+this.age+'歳)';
  }
}
var taro = new Member('太郎','山田',17);
var jiro = new Member('次郎','山田',15);

console.log(taro.getInfo());
console.log(jiro.getInfo());
console.log(jiro.age);



