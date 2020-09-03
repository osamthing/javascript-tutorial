/* コンストラクタ関数 */
var Member = function(firstName,lastName,age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getInfo = function(){
    return'氏名：'+this.lastName+''+this.firstName+'('+this.age+'歳)';
  }
}
var igarashi = new Member('肇','五十嵐',35);
console.log(igarashi.getInfo());