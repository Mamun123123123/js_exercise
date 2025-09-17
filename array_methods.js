// let name = "abdullah al mamun";
// let modified = name.charAt(0).toUpperCase() + name.slice(1);
// console.log(modified)


const num = [1,3,4,6,2]
const re = num.map(num => num * num).filter((num => num % 2 !== 0)).reduce((sum,num) => sum+num)
console.log(re)