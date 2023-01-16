//1. Write a JavaScript program to sort an array of JavaScript objects.

var tanha=[
    {
        author:"kkb",
        title:"this is the hole",
        left:4325
    },
    {
        author:"kkb",
        title:"this is the hole",
        left:3280
    },
    {
        author:"kkb",
        title:"this is the hole",
        left:5021
    }
]
for(var i=0;i<tanha.length;i++){
      for(var j=1+i;j<tanha.length;j++){
        if(tanha[i].left<tanha[j].left){
             var temp=tanha[i]
        tanha[i]=tanha[j]
        tanha[j]=temp
       
        }
       
      }
     
} 
 console.log(tanha)