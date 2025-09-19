//Convert javascript object to json
// const ob ={
//     name:"mamun",
//     age:20,
//     email:"alm90@gmail.com",
//     hobbies:["reading","writing"]
// }

// const convert = JSON.stringify(ob)
// console.log(convert)

//try : code block when find error
//catch: error block ta run kore
//finally: all executed code blocks
//structuressss
// try{

// } catch(){

// }finally{

// }

// try{
//     let num = 3
//     let result = num.toUpperCase();
//     console.log(result)
// } catch(error){
//           console.log("An error occured:",error.message)
// }finally{
//       console.log("this code block alwys")
// }

// ERRROORR throw........
function checkAge(age){
    if(age<18){
        throw new Error("not Eligible")//custom error with throww.....
    }
         console.log("accept")
    
}

try {
    checkAge(196)
} catch (error) {
    console.error("error:",error.message)
}finally{
    console.log("age varification completed")
}