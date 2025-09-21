// const mypromisee = new Promise((resolve,reject)=>{
//         const success = false;
//         if (success) {
//             resolve("successsss")
//         } else {
//             reject("shittt........")
//         }
// })

// mypromisee.then((message)=>{
//         console.log(message)
// }).catch((error)=>{
//     console.log(error)
// })

// let arr = [1,2,3,4,5]
// let r = arr.map(e => e>3)
// console.log(r)
///////****************** */

// function mamun(str){
//     return str.split(' ').sort((a,b)=> a.length - b.length)[0]
    
// }
// console.log(mamun("ih c a b Mamun")) 

/////****************** */

// function findDuplicates(arr) {
//   return arr.filter((num, index) => arr.indexOf(num) !== index);
// }

// console.log(findDuplicates([1,2,3,2,4,5,6,3])); 

// function intersaction(arr1,arr2){
//     return arr1.filter(num => arr2.includes(num))
// }

// console.log(intersaction([1,3,2,4] ,[3,2,5,6,7]))

// let a = [10,11,12,13,14]
// function print(b,...a){
//     console.log(a)
// }
// print(8,9,10,11,12)

// let arr = [2,1,3,4]

// console.log(arr.map(num => num = 8))

// let ob = {
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }
// //for(let a in ob) console.log(a, ob[a])

// let flaten = Object.entries(ob)
// let f = Object.fromEntries(flaten)
// console.log(f)

  ////// **************************

// let arr = [100,"q","mamun",10,8,"c"]

// let nums = arr.filter(num => typeof num === "number")
// let str = arr.filter(num => typeof num === "string" && num.length > 1)
// let ch = arr.filter(num => typeof num === "string" && num.length === 1)
// console.log(nums)
// console.log(str)
// console.log(ch)

// const obj1={};
// const obj2={
//     name:"mamun"
// }
// const obj3={
//     name:"dfdmssdfk"
// }
// obj1[obj2]={
//     name:"kj"
// }
// obj1[obj3]={
//     name:"eee"
// }
// console.log(obj1[obj2])

// function sum(a,b){
//     if(a && b) return a+b;
//     return function(b){
//         return a+b
//     }
// }

// console.log(sum(8,9))
// console.log(sum(8)(9))

// console.log(typeof NaN)

// console.log(100 - "8" + 20)

// let abc = 100
// if(function xyz(){}){
//     abc = abc + typeof(xyz)
// }

// console.log(abc)
       //// ****************?///////
// let arr = ["a","b"]
// let ans = arr.includes("B")
// console.log(ans)

// let str = "my name is mamun"
// // // console.log(str.length)
// // // let st = str.replace(/\s/g,'')//space remove

// // // console.log(st.length)

// let st = str.split('').reverse().join("")
// console.log(st)



var a = 200
{
  var a = 300
}
let b=a
{
  let b =-400
}
console.log(b)