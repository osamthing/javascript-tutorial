// オブジェクトリテラル
const obj = {
    "key" : "value"
}
console.log(obj.key);
console.log(obj["key"]);

const object = {
    "123" : "abc"
}
//console.log(object.123);
console.log(object["123"]);

// プロパティ名（キー）は”省略可
const color = {
    red: "red",
    green: "green",
    blue: "blue"
};

const name1 = "名前1";
const obj1 = {
    name1: name1
};
console.log(obj1);

const name2 = "名前2";
const obj2 = {
    name2
};
console.log(obj2);

// 空オブジェクトの宣言
const obj3 = new Object();
console.log(obj3);

const obj4 = {};
console.log(obj4);

const languages = {
    ja: "日本語",
    en: "英語"
};
const myLang = "ja";
console.log(languages[myLang]);

console.log();
const ja1 = languages.ja;
const en1 = languages.en;
console.log(ja1);
console.log(en1);

// 分割代入
const { ja, en } = languages;
console.log(ja);
console.log(en);
// ↑ちゃんと値が表示される、↓undefinedになる・・・なぜ？
const { ja2, en2 } = languages;
console.log(ja2);
console.log(en2);

console.log(languages);

for (const key in languages) {
    const val = languages[key];
    console.log(`${key} : ${val}`);
}

const obj5 = {};
obj5.key = "value";
console.log(obj5.key);
const key = "key-string";
obj5[key] = "value of key";
console.log(obj5[key]);
console.log(obj5["key-string"]);
console.log(obj5);

const obj6 = {
    [key]: "value"
};
console.log(obj6[key]);
console.log(obj6);

console.log();
// 存在確認
const obj7 = {
    key1 : "value",
    key2 : undefined
}

if (obj7.key1 === undefined) {
    console.log("なし")
} else {
    console.log("あり");
}
if (obj7.key2 === undefined) {
    console.log("なし");
} else {
    console.log("あり");
}
if (obj7.key3 === undefined) {
    console.log("なし");
} else {
    console.log("あり");
}

if ("key1" in obj7) {
    console.log("key1 ari");
} else {
    console.log("key1 nasi");
}
if ("key2" in obj7) {
    console.log("key2 ari");
} else {
    console.log("key2 nasi");
}
if ("key3" in obj7) {
    console.log("key3 ari");
} else {
    console.log("key3 nasi");
}
console.log(obj7);

if (obj7.hasOwnProperty("key1")) {
    console.log("key1 ari");
} else {
    console.log("key1 nasi");
}
if (obj7.hasOwnProperty("key2")) {
    console.log("key2 ari");
} else {
    console.log("key2 nasi");
}
if (obj7.hasOwnProperty("key3")) {
    console.log("key3 ari");
} else {
    console.log("key3 nasi");
}

// ?.
const obj8 = {
    a: {
        b: "objのaプロパティのbプロパティ"
    }
};
//console.log(obj8?.a?.b);
//console.log(obj8?.notFound?.notFound);
//console.log(undefined?.notFound?.notFound);
//console.log(null?.notFound?.notFound);
// ↑ Firefoxだと表示されるが、node.jsだと構文エラーになる

console.log();
const obj9 = { key: "value" };
console.log(obj9.toString());
console.log(String(obj9));
console.log(obj9);


const obj10 = {};
const symbolKey1 = Symbol("シンボル1");
const symbolKey2 = Symbol("シンボル2");
obj10[symbolKey1] = "1";
obj10[symbolKey2] = "2";
console.log(obj10[symbolKey1]);
console.log(obj10[symbolKey2]);
console.log(obj10);

console.log();
const obj11 = {
    "one": 1,
    "two": 2,
    "three": 3
};
console.log(Object.keys(obj11));
console.log(Object.values(obj11));
console.log(Object.entries(obj11));

// マージ
const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = Object.assign({}, objectA, objectB); // 先頭に空objectを入れておかないとobjectAにも追加される
console.log(merged);
console.log(objectA);
console.log(objectB);
