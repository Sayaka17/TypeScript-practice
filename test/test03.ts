//型推論
// sayHello変数が(name: string) => string型に解釈されている
const sayHi = (name: string): string => {
    return `Hello, ${name}!`
}

const val1 = sayHi('Sayaka')
// const val2 = sayHi(11) //エラー

// 関数の返り値の型付けは推論に任せて省略できる
// 推論された関数の返り値の型を用いて、さらに推論を進められる
interface Car {
    name: string;
    cc: number;
    price: number
}

const getCarName = (car: Car) => {
    return `carname: ${car.name}`
}

console.log(getCarName({name:'t-cross', cc:200, price:1000}))