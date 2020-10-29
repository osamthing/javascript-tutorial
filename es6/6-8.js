// 可変長引数
function sumVal(...args) {
  let result = 0;
  for (let arg of args) {
    result += arg;
  }
  console.log(result);
}

sumVal(1,2,3,4,5,6,7,8);
sumVal(1,2,4,8,16,32,64,128);

// var args = [1,2,3,4,5,6,7,8,9,0];
var args = "a,2,3,4,5,6,7,8,9,0";
sumVal(args);

// 可変長引数は必要なのか？配列で渡せばよくね？