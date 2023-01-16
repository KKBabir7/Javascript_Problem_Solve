

//callback function in object
   var tanha={
       name:"kkb",
       age:24,
       location:"tongi",
       firstname:"tanha",
       anoth:{
        name:"wwe",
        hight:20,
        div:"cox",
        ssot:function(hj){
            return tanha.anoth.name +hj
        }
       },
       finalname:function(x,y){
           var hj="nazmul"
           console.log(y(hj) +x +this.name)
       }
    }
tanha.finalname("js",tanha.anoth.ssot)