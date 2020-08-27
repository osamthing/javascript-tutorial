/*
このグローバル変数とローカル変数の定義は、なかなかk奇妙

グローバル変数は、ローカル変数に優先される
グローバル変数と同じ変数名で、関数内でローカル変数を定義すると、
そっちが優先的に定義されると同時に同盟の変数はundefineになる。。。なんでやねん。
*/




var val = 'Global！';
function getVal(){
  console.log(val);//undefined
  // var val = 'Local!';
  return val;
}
console.log(getVal());  //Local!
console.log(val);  //Global!