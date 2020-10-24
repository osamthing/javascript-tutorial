// Boolean
console.log(Boolean("string"));
console.log(Boolean(1));
console.log(Boolean({}));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

console.log();
// String
console.log(String("str"));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log(String(Symbol("シンボルの説明文")));
console.log(String([1, 2, 3]));
console.log(String({ key: "value" }));
console.log(String(function() {}));

console.log();
//const input = window.prompt("数字を入力してください", "42"); node.jsでは使えない
const input = "A4";//"0x3A";//"42.2";
console.log(typeof input);
console.log(input);
console.log(parseInt(input,10));
console.log(parseFloat(input));

const num = Number(input);
console.log(typeof num);
console.log(num);
console.log(parseInt(num,10));
console.log(parseFloat(num));

console.log();
// NaN
function isNaN(x) {
    return x !== x;
}
console.log(isNaN(1));
console.log(isNaN("str"));
console.log(isNaN({}));
console.log(isNaN([]));
console.log(isNaN(NaN));

