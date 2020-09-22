/*
これもすごいな。
Javescriptは変数チェックをしない！
これはバグの温床かも。
*/

function showVal(val){
	console.log(val);
}
showVal();  //undefined
showVal('bar');  //bar
showVal('hoge','foo');  //hoge

