/*
本ではES6からと言っているけど、ES5でもできそう。
いわゆるヒアドキュメント
これはいいぞ。
*/

//ヒアドキュメントっぽいやつ
const str = `Osamu
Yamakami`;

console.log(str);

//変数も埋め込める 変数展開ができる
const name = 'yamakami';
const str2 = `my name is ${name}`
console.log(str2);

