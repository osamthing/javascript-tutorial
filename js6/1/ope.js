// 演算子
let num = 1;
console.log(num);
num++;
console.log(num);
++num;
console.log(num);
num = num + 1;
console.log(num);

// +
console.log(1+1);
console.log(10+0.5);
console.log("あいう"+"えお");

console.log();
// -
console.log(1-1);
console.log(10-0.5);

// *
console.log(2*8);
console.log(10*0.5);

// /
console.log(8/2);
console.log(10/0.5);
console.log(2/8);

// %
console.log(8%2);
console.log(9%2);
console.log(9%5);
console.log(10%0.5);
console.log(10%.5);
console.log(10%4.5);

// **
console.log(2**4);
console.log(3**3);
console.log(Math.pow(2,4));
console.log(Math.pow(3,3));


// +
console.log(+1);
console.log(+"1");
console.log(+"A");

// NaN
console.log(NaN===NaN);
console.log(typeof NaN);
console.log(Number.isNaN(NaN));

// -
console.log(-1);
console.log(-(-1));
console.log(-"1");
console.log(-"S");

//
console.log(typeof 1);
console.log(typeof "1");

console.log();
// ++
let x = 1;
console.log(x);
console.log(x++);
console.log(x);
console.log(++x);
console.log(x);

console.log();
// --
console.log(x);
console.log(x--);
console.log(x);
console.log(--x);
console.log(x);

console.log();
// ===
console.log(1===1);
console.log(1==="1");
console.log(0.5===.5);

// !==
console.log(1!==1);
console.log(1!=="1");
console.log(0.5!==.5);

console.log();
// ==
console.log(1 == 1);
console.log("str" == "str");
console.log("JavaScript" == "ECMAScript");
const objA = {};
const objB = {};
console.log(objA == objB);
console.log(objA == objA);

console.log(1 == "1");
console.log(1 == "01");
console.log(0 == false);
console.log(0 == null);
console.log(null == undefined);

console.log();
// 
const value1 = undefined;
console.log(value1);
if (value1 === null) {
    console.log("===null")
}
if (value1 === undefined) {
    console.log("===undefined");
}
if (value1 == null) {
    console.log("==null");
}
if (value1 == undefined) {
    console.log("==undefined");
}

const value2 = null;
console.log(value2);
if (value2 === null) {
    console.log("===null")
}
if (value2 === undefined) {
    console.log("===undefined");
}
if (value2 == null) {
    console.log("==null");
}
if (value2 == undefined) {
    console.log("==undefined");
}

console.log();
// !=
console.log(1 != 1);
console.log("str" != "str");
console.log("JavaScript" != "ECMAScript");
const objC = {};
const objD = {};
console.log(objC != objD);
console.log(objC != objC);

console.log(1 != "1");
console.log(1 != "01");
console.log(0 != false);
console.log(0 != null);
console.log(null != undefined);

console.log();
// 
const value3 = undefined;
console.log(value3);
if (value3 !== null) {
    console.log("!==null")
}
if (value3 !== undefined) {
    console.log("!==undefined");
}
if (value3 != null) {
    console.log("!=null");
}
if (value3 != undefined) {
    console.log("!=undefined");
}

const value4 = null;
console.log(value4);
if (value4 !== null) {
    console.log("!==null")
}
if (value4 !== undefined) {
    console.log("!==undefined");
}
if (value4 != null) {
    console.log("!=null");
}
if (value4 != undefined) {
    console.log("!=undefined");
}

console.log();
// >
console.log(42 > 41);
console.log(42 > 42);
console.log(42 > 43);

// >=
console.log(42 >= 41);
console.log(42 >= 42);
console.log(42 >= 43);

// <
console.log(42 < 41);
console.log(42 < 42);
console.log(42 < 43);

// <=
console.log(42 <= 41);
console.log(42 <= 42);
console.log(42 <= 43);

console.log();
// 0b
var num2 = 333;
console.log(num2);
console.log(num2.toString(2));

// &
console.log("15="+(15).toString(2));
console.log("9="+(9).toString(2));
console.log((15 & 9).toString(2));
console.log((0b1111&0b1001).toString(2));
console.log((0b1001&0b110).toString(2));

console.log((0b1111|0b1001).toString(2));
console.log((0b1001|0b110).toString(2));

console.log((0b1111^0b1001).toString(2));
console.log((0b1001^0b110).toString(2));

console.log((~0b1001).toString(2));
console.log((~0b0110).toString(2));

console.log();
// &&
const s0 = "OK";
const s1 = undefined;
const s2 = null;
const s3 = true;
const s4 = false;
const s5 = 1;
const s6 = 0;
console.log(s0 && s1);
console.log(s0 && s2);
console.log(s0 && s3);
console.log(s0 && s4);
console.log(s0 && s5);
console.log(s0 && s6);
console.log();
console.log(s1 && s0);
console.log(s2 && s0);
console.log(s3 && s0);
console.log(s4 && s0);
console.log(s5 && s0);
console.log(s6 && s0);

console.log();
// ||
console.log(s0 || s1);
console.log(s0 || s2);
console.log(s0 || s3);
console.log(s0 || s4);
console.log(s0 || s5);
console.log(s0 || s6);
console.log();
console.log(s1 || s0);
console.log(s2 || s0);
console.log(s3 || s0);
console.log(s4 || s0);
console.log(s5 || s0);
console.log(s6 || s0);
