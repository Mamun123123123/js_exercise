const mypromisee = new Promise((resolve,reject)=>{
        const success = false;
        if (success) {
            resolve("successsss")
        } else {
            reject("shittt........")
        }
})

mypromisee.then((message)=>{
        console.log(message)
}).catch((error)=>{
    console.log(error)
})

