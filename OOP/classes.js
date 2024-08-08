//object


// const user ={
//     userName: "ALI",
//     loginCount: 8,
//     signedIn: true,

//    getUserDetails: function(){
//     console.log(`username: ${this.userName}`);
    
//    }
// }
// console.log(user.signedIn);



// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount, isLOggin) {
     this.username= username;
     this.loginCount=loginCount;
     this.isLOggin= isLOggin;


     return this
}
//constructor always gives new instance

const userOne =  new User("Hamzaa" , 12, true)
const userTwo= new User("Ali" , 34, false)
console.log(userOne);
console.log(userTwo);


function multiplyBy5(num){
     return num*5
}

   multiplyBy5.power= 2
 
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);


function createUser (username , score){

     this.username=username;
     this.score=score;
}
createUser.prototype.increment= function(){

     this.score++
}

 createUser.prototype.printMe= function(){

     console.log(`score is  ${this.score}`);
     
 }
// const coffee= createUser("coffee" , 12)
// const pizza= createUser("pizza" , 22)

// coffee.printMe()





class User1 {

     constructor(username, email, password){
          this.password=password;
          this.username=username;
          this.email=email;
     }

     encryptPassword(){
          return `${this.password}abc`
     }

     changeUsername(){
          return `${this.username.toUpperCase()}`
     }

}

const chai = new User1("chai", "ali@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

