// let name = "abdullah al mamun";
// let modified = name.charAt(0).toUpperCase() + name.slice(1);
// console.log(modified)


// const num = [1,3,4,6,2]
// const re = num.map(num => num * num).filter((num => num % 2 !== 0)).reduce((sum,num) => sum+num)
// console.log(re)

//const arr = [2,1,3,4,10]
// const resu=arr.map(num => num ** 2)
// const sorrt = resu.sort((a,b)=>b-a)
// console.log(sorrt)

// console.log(Math.min(...resu))


//find(): returns the first element match
// const users =[
//       {name:"Mamun", age: 80},
//     {name:"M", age: 70},

//     {name:"Man", age: 30}

// ];
//const resu = users.find(num => num.age>50)


//console.log(resu)
const arr = [2,1,3,4,10]
const resul = arr.find(num => num > 3)
const resull = arr.some(num => num > 3)

console.log(resul)
console.log(resull)



  
