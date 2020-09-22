var Phone = function(){};
Phone.prototype = {
  getOwner:function(){
    console.log('Owneris',this.owner);
  }
};
var SmartPhone = function(owner){
  this.owner = owner;

};
SmartPhone.prototype = new Phone();//(1)
SmartPhone.prototype.tap = function(){
  console.log('tap!');
};
var myPhone = new SmartPhone('igarashi');
myPhone.getOwner();

