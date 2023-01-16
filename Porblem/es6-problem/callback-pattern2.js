const coure=false
const marks=70

const enroll=(callback)=>{
 console.log("enroll process........")
   if(coure){
    callback()
   }    
   else{
    console.log('enrol faild...')
   }
}
const process=(callback)=>{
    console.log("payment  process........")
    setTimeout(function(){
         if(marks>=80){
    callback()
   }    
   else{
    console.log('payment faild...')
   }
    },3000)
  
}
const cartifi=()=>{
    console.log("get sucess")
}

enroll(()=>{
    process(cartifi)
})
