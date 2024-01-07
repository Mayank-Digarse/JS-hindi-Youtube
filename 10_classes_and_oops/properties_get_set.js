function User(email , password){
    this._email = email;
    this._password = password;

    Object.defineProperties(this, 'email' , {
        get : function(){
            return this._email.toUpperCase()
        },
        set: function(){
            this._email = value
        }

    })
    
    Object.defineProperties(this, 'password' , {
        get : function(){
            return this._password.toUpperCase()
        },
        set: function(){
            this._password = value
        }

    })
}

const chai = new User("chai@chai.com", "chai")
console.log(chai.email);