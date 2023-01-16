//1.Write a JavaScript program to find the largest of three given integers.
var first=1000
var sec=600
var trd=300
var largest
if(first>=sec && first>trd){
    largest=first
}
else if(sec>=first && sec>=trd){
    largest=sec
}
else if(trd>=first && trd>=sec){
    largest=trd
}
console.log(largest)
console.log(typeof(largest))






//2. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

var cel=60
var fer=45
var c=((fer-32)/9)*5
var f=((9*cel)+(32*5))/5
console.log(fer + "\xB0F is " + c.toFixed(2) + "\xB0C")
console.log(cel + "\xB0C is " + f.toFixed(2) + "\xB0F")


//3.Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
var firstvalu=20
var secvalue=20;
var fscvalue
if(firstvalu==secvalue){
   fscvalue=(firstvalu+secvalue)*3
}
else{
    fscvalue=firstvalu+secvalue
}
console.log(fscvalue)

//4. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
var kknb="tanhabir"

if(kknb.length<3){
    return console.log("string length 3 theke kom");
}
else{
    var lasrch=kknb.substring(kknb.length-3,kknb.length)//ending carecter orthat kknb.length holo 7 ..ar 7 holo ending carecter...ortat amra 7-3=4 4 theke 7 tomo carectar kete nibo
    console.log(lasrch+kknb+lasrch)
}
 
//5. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
var mainvalue=100;
var ap=70;
var al=71;
if(mainvalue-al>mainvalue-ap){
  console.log(ap +" is the long of " + mainvalue) 
}
else if(ap==al){
    console.log("all value same")
}
else{
      
   console.log(al +" is the near of " + mainvalue)
}


//6. Write a JavaScript program to reverse a given string. 
var stru="python"
var into=stru.split("").reverse().join('')
console.log(into)

//7. Write a JavaScript program to capitalize the first letter of each word of a given string. 
var ger="write a javaScript program to reverse a given string";
var tilo=ger.split(" ")
 


for(d=0;d<tilo.length;d++){
    var rop=tilo[d]
    var left=rop.slice(1,rop.length)
    var ffgh=rop.substring(0,1)
    var capi=ffgh.toUpperCase()
    var strin=capi+left;
    var finalstring=strin;
    console.log(finalstring)   
}

//8.  Convert the letters of a given string in alphabetical order


var alpa="TanHabir"
console.log(alpa.split("").sort().join(""))



//9. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
var ff="adghbiafyrb"

for(var di=0;di<ff.length;di++){
  if((ff[di]=="a") && (ff[di+4]=="b")){
    console.log("true")
    break;
  }
  else{
    console.log("fals")
    break
  }
}

//10. Write a JavaScript program to count the number of vowels in a given string. 

var vnames="etyatfukgvOhUu"
var vname=vnames.split("")
 var vona="aeiouAEIOU"
console.log(vname.length)
var counvou=[]

for(var vc=0;vc<vname.length;vc++){
   for(var vo=0;vo<vona.length;vo++){
   if(vname[vc]==vona[vo]){
    counvou.push(vona[vo])
     }
   } 
}

console.log("total voual is "+" " + counvou.length)


//11. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.
var onenum=7;
var townum=270
var allres=townum/onenum
var roundf=allres.toFixed(0)
var roundst=roundf.toString()
var rounds=roundst.split("")
console.log(rounds)
console.log(typeof(allres))

//12. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
var copyst="abc"
var copyset=copyst.split(" ")

for(cop=0;cop<5;cop++){
 copyset.push(copyset[cop])
}
console.log(copyset.join(""))
  //12.1 another way to use  string
var copm="abc"
console.log(copm.repeat(6))

//13. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.
var lastnum="abirthanha"
var lastyum=lastnum.substring(lastnum.length-3,lastnum.length)
console.log(lastyum.repeat(4))

//14. Write a JavaScript program to extract the first half of a string of even length. 
function halfs(str){
      if(str.length % 2 ==0){
         return str.substring(0,str.length/2)
      }
      else{
        return str + "  string will be not half"
      }
}
console.log(halfs("javascript"))
console.log(halfs("java"))
console.log(halfs("php"))


//15. Write a JavaScript program to create a new string without the first and last character of a given string.
function newstr(nstr){
       return nstr.substring(1,nstr.length-1)
}
console.log(newstr("abir"))
console.log(newstr("school"))
//16. Write a JavaScript program to concatenate two strings except their first character. 
function stradd(fstr,lstr){
  var firstr=fstr.substring(1,fstr.length)
  var secstr=lstr.substring(1,lstr.length)
 return firstr+secstr
}
console.log(stradd("abir","tanha"))



//17.Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three. 

function lasc(lastthree){
    var dfd=lastthree.substring(lastthree.length-3,lastthree.length)
    var dfdr=lastthree.substring(0,lastthree.length-3)
    return dfd+dfdr
}
console.log(lasc("javascript"))


//18. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three. 


function midel(strm){
     if(strm.length % 2==0){
      return strm;
     }
     else{
      var depep=Number((strm.length/2).toFixed(0))
      
      return strm.substring(depep-2,depep+1)
     }
}
console.log(midel("abirtjkanha"))


function flstr(js,py){
  if(js.length>py.length){
    var lipt=js.substring(js.length-py.length)
    return lipt+py
  }
   else if(js.length<py.length){
      var dreap=py.substring(py.length-js.length)
      return js+dreap
   }
   else if(js.length==py.length){
     return js+py
   }
}
console.log(flstr("javascript","py"))
console.log(flstr("php","rube"))
console.log(flstr("kkb","tnh"))

//19. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.
var badlaf=function(newps){
  if((newps.substring(0,1)=="p" || newps.substring(0,1)=="P") && (newps.substring(newps.length-1,newps.length)=="p" || newps.substring(newps.length-1,newps.length)=="P")){
   return newps.substring(1,newps.length-1)
  }
  else if(newps.substring(0,1)=="p" || newps.substring(0,1)=="p"){
    return newps.substring(1,newps.length)
  }
  else if(newps.substring(newps.length-1,newps.length)=="p" || newps.substring(newps.length-1,newps.length)=="P"){
    return newps.substring(0,newps.length-1)
  }
  else{
    return newps
  }
}

console.log(badlaf("Pythonp"))
console.log(badlaf("pythonp"))
console.log(badlaf("pythonp"))
console.log(badlaf("ythonP"))
console.log(badlaf("javascripy"))
//19.1 another way


var abadlaf=function(str){
  let start_pos = 0;
  let end_pos = str.length;

  if (str.length > 0 && str.charAt(0) == 'P') 
    { 
      start_pos = 1; 
    }

  if (str.length > 1 && str.charAt(str.length - 1) == 'P') 
  {
    end_pos--;
  }

  return str.substring(start_pos, end_pos);
}



console.log(abadlaf("Pythonp"))
console.log(abadlaf("pythonp"))
console.log(abadlaf("pythonP"))
console.log(abadlaf("javascripy"))