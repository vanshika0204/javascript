const user = new Object()

user.id = "123abc"
user.name = "Vanshika"
user.isLoggedIn = false

// console.log(user)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vanshika",
            lastname: "Sehgal"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj3 = {5: "e", 6:"f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// const obj5 = {...obj1, ...obj2}

// console.log(obj5)

const users = [
    {
        id: 1,
        email: "vs@gmail.com"
    },
    {
        id: 2,
        email: "v@gmail.com"
    }
]

console.log(users[1].email)

console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('isLoggedIn'))