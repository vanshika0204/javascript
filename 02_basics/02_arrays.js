const myArr = ["char1", "char2", "char3"]
const myArr2 = ["char4", "char5", "char6"]

// myArr.push(myArr2)
// console.log(myArr)
// console.log(myArr[3])
// console.log(myArr[3][1])

const newArr = myArr.concat(myArr2)
console.log(newArr)

const all_new_Arrays = [...myArr, ...myArr2]
console.log(all_new_Arrays)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
let real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Vanshika"))
console.log(Array.from("Vanshika"))
console.log(Array.from({name: "Vanshika"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))