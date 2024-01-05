const user = {
    username: "Mayank",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        
        console.log(this);
    }
    
}

function User(username, loginCount , isLoggedIn){
    this.myusername = username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Mayank" , 12 , true)
const userTwo = new User("Mayank",12 ,false)

console.log(userOne.constructor);
//console.log(userTwo);



