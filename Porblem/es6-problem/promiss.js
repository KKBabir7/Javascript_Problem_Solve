const course=true
const marks=90

const enrol=()=>{
     console.log(`enroll process`)
     const createPromiss=new Promise(function(callback,error){
          if(course){
            callback()
          }
          else{
            error('enrol faild')
          }
     })

     return createPromiss
}
const process=()=>{
    console.log("process contunue....")
    const createPromissp=new Promise(function(callback,error){
        if(marks>=80){
            callback()
        }
        else{
            error("process faild...")
        }
    })
    return createPromissp
}
const getcar=()=>{
    const getc=new Promise(function(callback){
        callback("get cartificate")
    })
    return getc
}

enrol()
     .then(process)
     .then(getcar)
     .then(function(value){
         console.log(value)
     })
     .catch(function(err){
        console.log(err)
     })