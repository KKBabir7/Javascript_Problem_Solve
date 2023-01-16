var person=function(x,y){
    this.name=x
    this.age=y
}

var abir=new person("kkbabir",20)
  person.prototype.country="bangladesh"
  person.prototype.fun=function(){
    return this.country + this.age
  }
console.log(abir.fun())



