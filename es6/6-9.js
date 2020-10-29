let func = function(a) {
  console.log(a);
}

func("foo");

let newf = (a) => {
  console.log(a);
}

newf("bar");

const newf2 = (a) => {
  console.log(a);
}

newf2("baz");

//一行+括弧なし
let newf3 = a => console.log(a);
newf3("foo1");
//括弧なし
let newf4 = a => {
  console.log(a);
}
newf4("foo2");
//括弧あり+一行
let newf5 = (a) => console.log(a);
newf5("foo3");
