var val = 'Global！';
function getVal(){
  console.log(val);//undefined
  var val = 'Local!';
  return val;
}
console.log(getVal());  //Local!
console.log(val);  //Global!