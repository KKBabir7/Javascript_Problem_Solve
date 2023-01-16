//old function new keyword
function abir(x,y,z){
   person.call(this,x,y)
   this.location=z
   this.dov=function(){
    return this.tanvir+this.location
   }
}
function person(x,y){
    this.tanvir=x
    this.akas=y
}
var kkb=new abir("abirk",28,"noakhali")
var tanha=new abir("israt",25,"tongo")
console.log(kkb.dov())
console.log(tanha.dov())
console.log(tanha.akas)