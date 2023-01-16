
//1. Write a JavaScript program to list the properties of a JavaScript object.

function obfunc(obfrom,r){
     console.log(Object.keys(obfrom))
     var t=delete r
     console.log(t)
}

var objname={
   red:"color",
   location:"noakhali",
   age:20
}
obfunc(objname,20)