function abir(x,y,z){
     if(x>y && x>z ){
         return x
     }
     else if(y>x &&  y>z){
         return y
     }
     else{
         return z
     }
}
console.log(abir(10,20,30))
console.log(abir(100,220,145))



var mehedda = function(){
    console.log("yes i am the kkb abir")
}
mehedda()



//1. Write a JavaScript function that reverse a number

function reve(re){
   return Number(re.toString().split("").reverse().join(""))
}
console.log(reve(26789))


function check_Palindrome(sftt){
    var sft=sftt.split(" ").join("")
    var df=[]
    var pf=[]
     for(var t=0;t<sft.length;t++){
        df.push(sft[t])  
        }
    for(var l=sft.length-1;l>=0;l--){   
        pf.push(sft[l])
        }
    if(df.join("")==pf.join("")){
        console.log("this plaindrom")
    }
    else{
        console.log("this not plaindrom")
    }
    
    
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('xfhofx');
check_Palindrome('xffofx');

//2. Write a JavaScript function that generates all combinations of a string.
function substrings(srf){
     var com=[]
      for(var i=0;i<srf.length;i++){
        for(var j=i+1;j<srf.length+1;j++){
            com.push(srf.slice(i,j))
        }
      }
      return com
}
console.log(substrings('dog'))

//3. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function dfsg(fuc){
   var tfuv= fuc.split(" ")
   var infc=[]
   for(var i=0;i<tfuv.length;i++){
      infc.push(tfuv[i].substring(0,1).toUpperCase() + tfuv[i].substring(1,tfuv[i].length))
   }
   return infc.join(" ")
}
console.log(dfsg("the quick brown fox"))

//4. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function long(scfg){
    var scf=scfg.split(" ")
    var der=[]

    for(var j=0;j<scf.length;j++){
       der.push((scf[j].length))
    }
  var maxx=der[0]
  for(fg=0;fg<der.length;fg++){
    if(der[fg]>maxx){
     maxx=der[fg]
    }
  }
  for(var jw=0;jw<scf.length;jw++){
   if(scf[jw].length==maxx){
      console.log(scf[jw])
   }
 }
 }
long("web development service")


//5. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(4));

//6. Write a JavaScript function which returns the n rows by n columns identity matrix.
function maxt(m){
   for(var i=0;i<m;i++){
    for(var j=0;j<m;j++){
       if(i==j){
        console.log("1")
       }
       else{
        console.log("0")
       }
    
    }
     console.log("....")
   }
  
}

maxt(5)


//7. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function Second_Greatest_Lowest(arr)
{
for(var i=0;i<arr.length;i++){
  for (var j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
     
  var temp= arr[i]
    arr[i]=arr[j]
     
    arr[j]=temp

    }

  }

}
  var gh=arr
 var fg=[]
 fg.push(gh.slice(1,2))
 fg.push(gh.slice(gh.length-2,gh.length-1))
  return fg.join(",")
} 

console.log(Second_Greatest_Lowest([1,9,2,10,3,4,8,5]));
  //7.1 another way
  
function Second_Greatest_Lowesta(arr)
{
   arr.sort(function(a,b){
          return a-b
   })
  var gh=arr
 var fg=[]
 fg.push(gh.slice(1,2))
 fg.push(gh.slice(gh.length-2,gh.length-1))
  return fg.join(",")
} 

console.log(Second_Greatest_Lowesta([1,9,2,10,3,4,8,5]));

//8. Write a JavaScript function to compute the factors of a positive integer.
function factors(k){
  var g=[]
   for(var t=0;t<=k;t++){
    if(k%t==0){
      g.push(t)
    }
   }
   return g
}
console.log(factors(20));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));

//9. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function power(a,b){
  return Math.pow(a,b)
}
console.log(power(2,3))
  //9.1 another way
  function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(exp(2, 3));

//10. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
function Char_index(str1) {
     var nstr= str1.split(" ")
     var ty=[]
     for(var i=0;i<nstr.length;i++){
       ty.push(nstr[i])
     }
     var tuy=[]
     for(var p=0;p<ty.length;p++){
      for(var l=0;l<ty[p].length;l++){
        tuy.push(ty[l].split(""))
      }
      
     }
    
     var tuf=[]
     for(var n=0;n<nstr.length;n++){
      for(var nm=0;nm<tuy[n].length;nm++){
        tuf.push(("'"+tuy[n].slice(nm,nm+1)+"'") +":"+(nm+1))
     }

   
    }
      return tuf.join(",")
  }
  console.log(Char_index("The quick brown fox jumps over the lazy dog"));

//11. Write a function for searching JavaScript arrays with a binary search. 
  function bais(ar,s){
     ar.sort(function(a,b){
      return a-b;
  })
  var th=[]
    for(var i=0;i<ar.length;i++){
        if(i===s){
          
        th.push(ar.indexOf(i))
            
        }
    }
   return th
  }
  var bain=[1,2,3,4,5,6,7,8]
  console.log(bais(bain,5))
//12. Write a JavaScript function that generates a string id (specified length) of random characters
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));

//13. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
function arcom(srf){
  var com=[]
   for(var i=0;i<srf.length;i++){
     for(var j=i+1;j<srf.length+1;j++){
         com.push(srf.slice(i,j))
     }
   }
   var fg=com.join(" ").split(" ")
   for(var t=0;t<fg.length;t++){
 if(fg[t].length==1){
     fg[t]=''
   }

   }
  
   return fg
}
console.log(arcom([1,8,9]))

//14. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function php(ag){
 return 20+ag
}
function js(a,ppl){
  var age=30;
 return ppl(age)+a
}
console.log(js(20,php))