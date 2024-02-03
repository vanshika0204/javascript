let myDate = new Date()

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myCreatedDate = new Date(2024, 1, 24)
// let myCreatedDate = new Date(2024, 1, 24, 5, 40)
// let myCreatedDate = new Date("2024-02-03")
let myCreatedDate = new Date("02-03-2024")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long"
})