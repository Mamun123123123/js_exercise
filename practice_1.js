//Managing shopping cart Data  

const cart = [
    {name:"Laptop",price:800,quantity:1},
    {name:"PC",price:400,quantity:5},
    {name:"Computer",price:600,quantity:7}
    
]

const total_price = cart.reduce((sum,item)=>sum+item.price,0)
const total_cost = cart.reduce((sum,item)=> sum + item.price * item.quantity,0)

console.log(total_cost)