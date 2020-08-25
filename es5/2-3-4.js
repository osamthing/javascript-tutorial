//配列（1次元）
var arr = ['foo','bar','baz',1,"hoge"];
console.log(arr);
console.log(arr[1]);

//配列（2次元）
var arr = ['foo',['bar0','bar1'],'baz'];
console.log(arr);
console.log(arr[1][0]);

//連想配列はこれ{} 連想配列というかオブジェクト どっち？
var player = {
	name: "Ronaldo",
	team: "Juventus",
};
console.log(player);
console.log(player["name"]);
console.log(player["team"]);

//連想配列はこれ[]でもいける
var foo = [];
foo['bar'] = 'barbar';
foo['baz'] = 'bazbaz';
 
console.log(foo.bar); 
console.log(foo.baz);
console.log(foo);

//連想配列はnewしてもいける（これもオブジェクトか？）
var foo2 = new Array();
foo2['bar'] = 'barbar2';
foo2['baz'] = 'bazbaz2';
console.log(foo2.bar); 
console.log(foo2.baz);
console.log(foo2);


var arr = ['foo','bar','baz',1,"hoge", foo];
console.log(arr);
console.log(arr[1]);