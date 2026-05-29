class User {
    constructor(public username: string, private password: string) {
    }


    login(checkingPassword: string) {
        return checkingPassword === this.password;
    }
}

let user1 = new User('Vitor', '12345')
console.log(user1)
console.log(user1.login('123'))
console.log(user1.login('12345'))