const descripter = Object.getOwnPropertyDescriptor(Math, "PI")


console.log(descripter)

// const myNewObj = Object.create(null)

const obj = {
    name: 'pen',
    price: 250,
    isAvailable: true,

    orderObj: function(){
        console.log("Not working properly")
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"))

Object.defineProperty(obj, 'name', {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(obj, "name"))

for (let [key, value] of Object.entries(obj)) {
    if(typeof value !=='function'){
        console.log(`${key} : ${value}`)
    }
}