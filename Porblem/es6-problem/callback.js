const dis=(mainres)=>{
   console.log(mainres)
}

const cal=(x,y,callback)=>{
      const z=x+y;
      callback(z)
}


cal(10,30,dis)


const ano=(ok)=>console.log(ok)

const namee=(x,y)=>{
    const  ok=x+'jon'
     y(ok)
}

namee('hellow',ano) 


//another way(pass display body)
 const calp=(x,y,callback)=>{
       const z=x+y;
       callback(z)
 }
 
 
 calp(50,30,function(mainres){
     console.log(mainres)
 }) 
 