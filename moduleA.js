let sum = 111
let name = '小明'

function say() {
    console.log('hello 小明')
}

// 导出方式1
export {
    say,
    name
}

// 导出方式2
export const arr = [1, 2, 3]

// 3.导出函数/类
export function add(x, y) {
    return x + y
}

export class Person {
    run() {
        console.log('奔跑')
    }
}

// 5.export default，默认导出
const address = '北京'
export default address
