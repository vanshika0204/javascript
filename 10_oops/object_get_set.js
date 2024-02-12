const User = {
    _email: 'v@vs.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}

const one = Object.create(User) // factory function
console.log(one.email)