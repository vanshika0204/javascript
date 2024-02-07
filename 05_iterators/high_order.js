// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

// maps

// console.log(map)

// for (const key of map) {
//     console.log(key)
// }
// for (const [key] of map) {
//     // console.log(key)
// }
// for (const [key, value] of map) {
//     // console.log(key, ':-', value)
// }

// const myObject = {
//     game1 : 'NFS', 
//     game2 : 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }

const myObject = {
    js: 'javascript',
    cpp: 'c++', 
    rb: "ruby",
    swift: "swift by apple"
} 

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    // console.log(key)
    // console.log(programming[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "INDIA")

for(const key in map){
    // console.log(key)
}

const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (val) {  // callback function
//     console.log(val)
// } )

// coding .forEach( (item) => {
//     console.log(item)
// } )

// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr)
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
} )