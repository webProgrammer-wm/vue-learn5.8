import { name, say } from "./moduleA.js"
import { arr as numList } from "./moduleA.js"
import { add } from "./moduleA.js"
import { Person } from "./moduleA.js"
import addr from './moduleA.js'

console.log(name)
say()
console.log(numList)
console.log(add(12, 22))

const p = new Person()
p.run()

console.log(addr)
