const name="vanshika"
const repoCount=50

// console.log(name + repoCount + "Value");

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName= new String('vanshika-20')

console.log(gameName[0])
console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName)

console.log(gameName.charAt(2))
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "    vanshika sehgal    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://google%20web.com"

console.log(url.replace('%20', '-'))
console.log(url.includes('web'))

console.log(gameName.split("-"))