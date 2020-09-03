var val = 1;
console.log(val);

//配列（1次元）
var arr = ['foo','bar','baz',1,"hoge"];
console.log(arr);
console.log(arr[1]);

var num = 4;
console.log(arr[num]);

//配列（2次元）
var arr = ['foo',['bar0','bar1'],'baz'];
console.log(arr);
console.log(arr[1][0]);

var num = 1;
var s_num = 1;
console.log(arr[num][s_num]);

//連想配列はこれ{} 連想配列というかオブジェクト どっち？
var player = {
	name: "Ronaldo",
	team: "Juventus",
	test: {
		ts2: "foo",
		ts2: "bar"
	}
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
// console.log(foo2['bar']); 
console.log(foo2);

//配列に配列を格納できる
var arr = ['foo','bar','baz',1,"hoge", foo];
console.log(arr);
console.log(arr[1]);

/*
配列とかオブジェクトとか連想配列とかの区別がよくわからなくなるぐらい、
むちゃくちゃな緩さ。
*/