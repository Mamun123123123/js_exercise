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

const ob = {
    
        name: "mamun",
        age: 23,
        city: "Dhaka",
        code:349883948
    
};

for(let o in ob) console.log(o + ":  " + ob[o])

delete ob.name   
for(let o in ob) console.log(o + ":  " + ob[o])

Object.assign(ob,{name:"Mamun"})
for(let o in ob) console.log(o + ":  " + ob[o])

