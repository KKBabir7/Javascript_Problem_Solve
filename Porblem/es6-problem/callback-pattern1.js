const process=(x,y,callback)=>{
    console.log("this process")
    z=x+y   
    callback(z)
    setTimeout(function(){
        console.log(`proocess contuneue.....`)
    },2000)
}
const getry=(ddum,callback)=>{
    console.log(`abir is ${ddum}`)
    callback()
}
const carti=(callback)=>{
    
    console.log(`get cattiied`)
    callback()
}
const final=()=>{
     setTimeout(function(){
        console.log(`i am geet meat`)
     },5000)
     console.log(`tannnu is the best`)
}
process(10,20,()=>{
    getry(z,()=>{
        carti(final)
    })
})