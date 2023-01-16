//another call back 
var tanha={
    name:"kkb",
    age:24,
    location:"tongi",
    firstname:"tanha",
    anoth:{
     name:"wwe",
     hight:20,
     div:"cox",
     ssot:function(x){
         return this.name +x
     }
    },
    finalname:function(){
       var nm="noakhali"
       return this.anoth.ssot(nm)
    }
 }
console.log(tanha.finalname())