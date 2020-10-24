// 関数を2回実行する関数！！
function doTwice(func) {
  func(); // 1回目！
  func(); // 2回目！
}

// あいさつするだけの関数
function hello1() {
  console.log('Hello!');
}

// あいさつを2回実行する
doTwice(hello1);

// あいさつを2回実行する
doTwice(function(){console.log('Hello!')});



const obj = {
    method1: function() {
        console.log("method1");
    },
    method2: () => {
        console.log("method2");
    }
};

obj.method1();
obj.method2();
  