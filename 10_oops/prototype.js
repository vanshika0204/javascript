// let myName = "vanshika    "

// console.log(myName.truelength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.vanshika = function(){
    console.log(`vanshika is present in all objects`)
}

Array.prototype.heyVanshika = function(){
    console.log(`Vanshika says hello`)
}

// heroPower.vanshika()

myHeros.vanshika()

myHeros.heyVanshika()

// heroPower.heyVanshika()

// inheritance

const user = {
    name: "Vanshika",
    email: '123@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Sehgal    "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotherUsername.trueLength()
"vanshika".trueLength()