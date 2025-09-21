let promise = new Promise((resolve,reject) => {
    let success = true
    if(success){
        resolve("Data accesss")
    }else{
        reject("not access")
    }
})

promise.then(result => console.log(result))
promise.catch(error => console.log(error))