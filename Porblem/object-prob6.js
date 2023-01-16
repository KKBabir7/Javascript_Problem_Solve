//1. Write a JavaScript function to convert an object into a list of `[key, value]` pairs


function myu(x){
   var ty=Object.keys(x)
   var pa=[]
   for(var i=0;i<ty.length;i++){
       pa.push(["'" +ty[i] +"'" +"," +"'"+ x[ty[i]] +"'" ])
   }
   return pa

}



var tanha={
    red: "#FF0000", 
    green: "#00FF00",
    white: "#FFFFFF"
}
console.log(myu(tanha))