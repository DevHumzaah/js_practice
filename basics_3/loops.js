let array1= [0,1,2,4,6,7,8,9,0,]

for (let i = 1; i < 10; i++) {
    // const element = array1[i];
    console.log(array1);    
}



// for (let i = 0; i <= 10; i++) {
//    console.log(`Outer Loop value: ${i}`);
   
//     for (let j = 0; j <= 20; j++) {

//         // console.log(`Inner Loop value: ${j}`);
//         console.log(i + '*' + j + '=' + i*j);
        
        
//     }
    
// }


let i= 0
while (i<=10) {

    console.log(`Value of Index is  ${i}`);
    i= i+2
    
    
}
  let myArray= ['spideman', 'batman' , 'superman']

  let arr=0
  while (arr<myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr=arr+1
    
    
  }

//for of loop

const arr2= [1,2,34,4,5,6,6]

for (const num of arr2) {
       console.log(num);
       
}



const myObject ={
    name: 'ali',
    address: 'lahore'

}

// for(const [key, value] of myObject){
//     console.log(key, '=>',  value);
    
// }   //it is not iterable


//arrays kylia for of loop 
//objects ky lia for in loop


const myObject1={
    cpp:'C++',
    js: 'JavaScript',
    rb: 'Ruby'
}

for(const key in myObject1){
    console.log(`${key} shorcut is for ${myObject1[key]}`);
    
}

//for each (array ky andar objects)

const myCoding=[

    {
        languageName: "JavaScript",
        Filename:"js"

    },
    {
        languageName: "Java",
        Filename:"java"

    },
    {
        languageName: "python",
        Filename:"py"

    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})


//MAP

const mynums=[1,2,3,4,5,6,7,8,9]

const newNums= mynums.map((num)=>{
    return num + 10

})



console.log(newNums);

//chaining

const num2=mynums
                  .map((n)=>n*10)
                 .map((n)=>n+1)
                .filter((n)=>n >=40) 

 console.log(num2);
                