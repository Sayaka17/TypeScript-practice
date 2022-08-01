// boolean
var isOpen = true;
var id = '';
var hasId = Boolean(id);
console.log(hasId);
// list
var list = [1, 2, 3];
// strictNullCheck true の場合エラーがでる
var names = 'Michel Jackson';
names = undefined;
names = null;
// 関数宣言
var sayHello = function (name, q) {
    return "Hello, " + name + (q ? ' ?' : '');
};
// マウスカーソルをホバーすると、型の情報がわかる
var text = sayHello('hiyoko', true);
// void型
var logHello = function () {
    console.log('Hello!');
};
// object型 基本的には使わない！
var person = {
    name: 'Michael',
    age: 20
};
// こっちを使う
var person1 = {
    name: 'piyo',
    age: 20
};
// any型　最終手段　どんな型でも許容する あまり使用しない
var anyValue = 'ppp';
anyValue = true;
anyValue = 17;
