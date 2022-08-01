//型推論
// sayHello変数が(name: string) => string型に解釈されている
var sayHi = function (name) {
    return "Hello, " + name + "!";
};
var val1 = sayHi('Sayaka');
var getCarName = function (car) {
    return "carname: " + car.name;
};
console.log(getCarName({ name: 't-cross', cc: 200, price: 1000 }));
