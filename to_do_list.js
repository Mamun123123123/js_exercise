const tasks =[]
function add_task(task){
    if(!task)throw new Error("Task can't be empty");
    tasks.push(task)
    console.log("Task added:",task)
     console.log("all tasks:",tasks)
}
function delete_task(index){
    if(index < 0 || index >= tasks.length){
        throw new Error("Invalid index");
    }
    tasks.splice(index,1)
    console.log("deleted:",tasks)
}
try {
    add_task("hi")
   add_task("heei")
   add_task("hidfdf")
   delete_task(1)
} catch (error) {
   console.log("error:",error.message)   
}
