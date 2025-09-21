// let arr = [2,5,8,11,14]
// for(let ar of arr) console.log(ar)

// let even = arr.filter(num => num % 2 === 0)
// console.log(even) 
// let sum = arr.reduce((sum,num) => sum+num,0)
// console.log(`sum is : ${sum}`)   

// arr.reverse()
// console.log(arr)

// let sqr = arr.map(num => num ** 2)
// console.log(sqr)


// function fact(f){
//     let fact = f
//     let resst =1
//     for(let temp =1;temp<=f;temp++)
//     {
//         resst =resst*temp
//     }
//     console.log(resst)
// }
// fact(5)

// const largest2 = arr => Math.max(...arr);
// console.log(largest2([3,7,2,9,4])); 
// const sums = (a, b) => a + b;

// console.log(sums(5, 8));

// let person = {name: "Rahim", age: 25, job: "Student"};

// for (let key in person) 
//     console.log(key + ": " + person[key]);

// person.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
//     };
    
//     person.greet(); 

// const ob = {
    
//         name: "mamun",
//         age: 23,
//         city: "Dhaka",
//         code:349883948
    
// };

// for(let o in ob) console.log(o + ":  " + ob[o])

// delete ob.name   
// for(let o in ob) console.log(o + ":  " + ob[o])

// Object.assign(ob,{name:"Mamun"})
// for(let o in ob) console.log(o + ":  " + ob[o])

// let arr = [34,4,5,6,7,8]
// let result = arr.map(num => num % 10 )
// console.log(result)
// let resust = arr.sort((a,b) => a-b)
// console.log(resust)


// let srt = "abdullah aL Mamun"
// let rev = srt.replaceAll("a","A")
//let rev = srt.split("").map(str => str === "a"?"@": str).filter(str => str === "l")
// let rev = srt.slice(4,6)
// console.log(rev)

// const ob = {
    
//         name: "mamun",
//         age: 23,
//         city: "Dhaka",
//         code:349883948
    
// };

// for(let obb in ob) console.log(`My ${obb} : ${ob[obb]}`)


let arr = [2,3,4,5,6,7,11,33,44,55,66,100]

// console.log(Math.max(...arr))
function check(){
        let even = arr.filter(num => num % 2 === 0)
        let odd = arr.filter(num=>num%2 !==0)
        let lucky_number = Math.floor(Math.random() * 100)

        if(even[0] == lucky_number && odd[0] === lucky_number ){
                console.log("you are selected")
                console.log(`Your Lucky Number is ${lucky_number} `)
        }else{
                console.log("not selected")
                console.log(`The Lucky number is ${lucky_number} and your Number is ${even[0]} and ${odd[0]}`)

        }


}
check()
