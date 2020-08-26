var foo = { a:1, b:2, c:3 };
console.log(foo.a);
console.log(foo['a']);
console.log(foo);

var foo = {};
foo['a'] = 1;
foo['b'] = 2;
foo['c'] = 3;
console.log(foo.a);
console.log(foo['a']);
console.log(foo);


/*
定義の仕方も取得の仕方もむちゃくちゃだ。
*/