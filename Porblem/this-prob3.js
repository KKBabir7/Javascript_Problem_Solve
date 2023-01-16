//with call mathod use in tow object
function thidfg(){
var kkb={
    name:"abir",
    age:20,
    relation:"marred",
    bari:function(){
      return  this.fname+ this.lname
    }
}
var tanha={
    fname:"tongi",
    lname:"aabir"
}

 console.log(kkb.bari.call(tanha))
}

thidfg()
//call mathod use in one object
function lif(){
     var abir={
        name:"tanha",
        age:23,
        aka:{
            nm:"nazrul",
            loca:"mirpur",
            utto:function(){
                return this.loca 
            }
        },
        divio:function(ab,fg){
             
            return this.nm + this.utto() +ab+fg
          
        }
     }

     console.log(abir.divio.call(abir.aka,"abir","kkb"))
  
}
lif()

//use inside and outside object in one inside function use call mathod
function callma(){
   var kkb={
        name:"js",
        age:200,
        vigi:function(){
            return this.name
        },
        ok:{
            fname:"cumilla",
            make:function(name){
                return this.list +name
            }
        }
        
   }
   var anob={
    list:"orfg"
   }

console.log(kkb.ok.make.call(anob,kkb.vigi()))

}
callma()
//use apply mathod
function applyuse(){
    var abir={
        newfc:function(x,y,z){
            return this.last +x+y+z 
        }
    }
  var anb={
    last:"kkbn"
  }
    console.log(abir.newfc.apply(anb,[10,20,"queen"]))
}
applyuse()

//use inside and outside object in one inside function use apply mathod
function applyma(){
    var kkb={
         name:"js",
         age:200,
         vigi:function(){
             return this.name
         },
         ok:{
             fname:"cumilla",
             make:function(f){
                 return this.mot() + this.list +f
             }
         }
         
    }
    var anob={
     list:"orfg",
     pas:"dhaka",
     mot:function(){
        return this.list +this.pas 
     }
    }
 
 console.log(kkb.ok.make.apply(anob,[kkb.vigi()]))
 
 }
 applyma()

 


