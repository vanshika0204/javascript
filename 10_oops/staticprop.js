class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const vanshika = new User("vanshika")
// console.log(vanshika.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const one = new Teacher("myone", "my@one.com")
one.logMe()
console.log(one.createId())