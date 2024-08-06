
function addTwoNo(num1, num2){

    // console.log(num1 + num2);

    let result = num1 + num2
    return result  
    
}
const result = addTwoNo(5, 7)

console.log("Result:" , result);



function loginUser(username){
    // if(username=== undefined){
    //     console.log("Please Enter User Name");
        

    // }
    return `${username} just logged in`
}

//ager kuch pass ni krein gy to null ni ata undefined ata hai
console.log(loginUser("Ali"));
// console.log(loginUser());



function calculateCartPrice(...num1){  //rest opertor (spread)
    return num1
}

console.log(calculateCartPrice(100 , 200 , 300));



const myNewArray = [100, 2900, 300, 333, 322]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));




function addOne(num1){   //only declaration
    return num1 +1
}
console.log(addOne(8))

const addTwo = function(num2){  //decalre ky sth variable ma hold krdia ha
    return num2 + 2
}
addTwo(1)





//ARROW FUNCTIONS & THIS KEYWORD


const user={
    username: "ali",
    price: "990",

    welcomeMessage: function () {
        console.log(`${this.username} welcome to class`);
        
    }
}

user.welcomeMessage()

 
const user1 = function (){
    let username= "ali"
    console.log(this.username);
    
}
user1()

const user2 = () => {
    let username= "ali"
    console.log(this.username);
    
}
user1()

const calTwo = (n1, n2) =>{
     return n1 + n2  // explicit return
}

// const calTwo= (n1 , n2) => (n1 + n2) //implicit 
console.log(calTwo(3,4));




//INVOKED FUNCTION

//global scope ki poluution ko htany ky lia invoked func use krty hein


(function chai (){
    console.log("HIIII");
    
})();
//2 iifw
( (name)  => {
    console.log( `HIIII ${name}`);
    
})('ali')