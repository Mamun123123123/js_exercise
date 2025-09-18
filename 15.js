let marks =[33,38,83,69,96];
// let sum = 0
// for(let mark of marks) sum=sum+mark
// let average=sum/5
// console.log(average)

let re = marks.reduce((sum,num)=>sum+num)
let avg = re/marks.length
console.log(avg)