class User {
    #password;
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }


    login(checkingPassword) {
        return checkingPassword === this.#password;
    }
}

let user1 = new User('Vitor', 12345)
console.log(user1.login(123))
console.log(user1.login(12345))