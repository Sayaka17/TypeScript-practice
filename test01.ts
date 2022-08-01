// boolean
const isOpen: boolean = true
const id: string = ''
const hasId: boolean = Boolean(id)
console.log(hasId)

// list
const list: number[] = [1,2,3]

// strictNullCheck true の場合エラーがでる
let names: string = 'Michel Jackson'
names = undefined
names = null

// 関数宣言
const sayHello: (name: string, q: boolean) => string = (name: string, q:boolean): string => {
    return `Hello, ${name}${q ? ' ?' : ''}`
}
// マウスカーソルをホバーすると、型の情報がわかる
const text = sayHello('hiyoko', true)

// void型
const logHello: () => void = (): void => {
    console.log('Hello!')
}

// object型 基本的には使わない！
const person: object = {
    name: 'Michael',
    age: 20
}
// こっちを使う
const person1: {
    name: string
    age:  number
    height?: number //引数になくても大丈夫
} = {
    name: 'piyo',
    age: 20
}
console.log(person1.age)

// any型　最終手段　どんな型でも許容する あまり使用しない
let anyValue: any = 'ppp'
anyValue = true
anyValue = 17