//1. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

var abir=function(ab){
  if(ab.length==3){
    var aradd=0;
  
    for(var i=0;i<ab.length;i++){
       aradd =ab[i]+aradd      
    }
    return aradd
  }
  else{
   return ab

  }
}
console.log(abir([10,50,30]))
console.log(abir([10,20,30,40]))
console.log(abir([10,20,30]))

//2. Write a JavaScript program to rotate the elements left of a given array of integers of length 3
function rotet(sar){
  return [sar[1],sar[2],sar[0]]
}
console.log(rotet([10,-20,10]))

//3. Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1. 

function apper(apa){
   if(apa[0]==1 || apa[apa.length-1]==1){
   return true
   }
   else{
    return false
   }
}
console.log(apper([2,2,3,1]))
console.log(apper([1,2,3,1,0]))
console.log(apper([1,2,3,1]))
console.log(apper([4,1,2,3,1,2]))


//4. Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3. 
function aeql(eql){
  if(eql[0]==eql[eql.length-1]){
  return true
  }
  else{
   return false
  }
}
console.log(aeql([2,2,3,1]))
console.log(aeql([1,2,3,1,0]))
console.log(aeql([1,2,3,1]))
console.log(aeql([4,1,2,3,1,2]))

//5. Write a JavaScript program to reverse the elements of a given array of integers length 3. 
function arev(rev){
    adr=[]
   for(var r=rev.length-1;r>=0;r--){
       adr.push(rev[r])
   }
   return adr
}
console.log(arev([1,2,3,4,5]))

  //5.1another way with string mathod
function ast(revs){
 return revs.reverse()
}
console.log(ast([1,2,9,3,4,5]))
//6. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
function flvalue(flv){
   if(flv[flv.length-1]>flv[0]){
    nea=[]
      for(var fl=0;fl<flv.length;fl++){
        nea[fl]=flv[flv.length-1]
      }
      return nea
   }
   else{
    if(flv[flv.length-1]<flv[0]){
      nea=[]
        for(var fl=0;fl<flv.length;fl++){
          nea[fl]=flv[0]
        }
        return nea
     }
   }
}
console.log(flvalue([10,20,30]))
console.log(flvalue([70,20,30]))

//7. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.
function mdv(mdv1,mdv2){
    var newar=[]
    var llb=Number((mdv1.length/2).toFixed(0))-1
    var llb2=Number((mdv2.length/2).toFixed(0))-1
    newar.push(mdv1[llb],mdv2[llb2])
    return newar
}
console.log(mdv([10,20,30],[40,30,20,30,10]))
console.log(mdv([10,20,30,23,12],[40,30,20,30,10]))
console.log(mdv([10,20,30],[20,30,10]))
//7.1 another way
function mdva(mdv1a,mdv2a){
  var newara=[]
  var llba=Math.floor((mdv1a.length/2))
  var llb2a=Math.floor((mdv2a.length/2))
  newara.push(mdv1a[llba],mdv2a[llb2a])
  return newara
}
console.log(mdva([5,12,30],[40,30,220,30,10]))
console.log(mdva([10,20,730,23,12],[40,30,520,30,10]))
console.log(mdva([10, 20,30],[20,30,10]))
// 8.Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
function swap(arra) {
  [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
  return arra;
}
console.log(swap([1, 2, 3, 4]));  
console.log(swap([0, 2, 1]));  
console.log(swap([3])); 
//9. Write a JavaScript program to add two digits of a given positive integer of length two.

function subs(esu){
    var tsub=esu.toString().split("").join("")
    var nadd=0
    for(var g=0;g<tsub.length;g++){
          nadd=Number(tsub[g])+nadd
    }
    return nadd
}
console.log(subs(357))

//10. Write a JavaScript to find the longest string from a given array of strings. 
function bigs(scf){
  
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
      return scf[jw]
   }
 }
   
   
}


console.log(bigs(["yuuubir","tanha","hugedefinat","abirtfghjlovealltime"]))

//11. Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two. 
function nbj(fvs){
  var pas=[0,0]
    for(d=0;d<=fvs.length-1;d++){
      if(d%2==0){
        pas[0] +=fvs[d]
      }
      if(d%2==1){
        pas[1] +=fvs[d]
      }
    }
    return pas
}


console.log(nbj([4,8,6,7,5,8,4,9]))

//12. Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

function dbls(ser,set){
    if(ser.length==set.length){

       for(var ty=0;ty<=ser.length;ty++){
          if(ser[ty]==set[ty]){
            return true
          }
          else{
            return false
          }
       }
    }
    else{
      return false
    }
}
console.log(dbls([2,3,10,30],[2,3,10,30]))
console.log(dbls([2,3,10,30],[12,13,10,40]))


//13. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and it does not divide either, then two given integers are similar. Check whether two given integers are similar or not. 
function er(fgh){
  var tu=[]
    for(r=0;r<fgh.length-1;r++){
      tu.push(fgh[r])
      if(Number(tu.join("")) % fgh[fgh.length-1]==0){
       return true
      }
    else{
      return false
    }
    }
    
  }
console.log(er([10,25,5]))
console.log(er([5,12,8,4,4]))

//14. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression. 
function check_arithmetic_Expression(jk){
  
  var tut=[]
    for(ry=0;ry<jk.length-1;ry++){
      tut.push(jk[ry])
    }
    if(tut[0]+tut[1]==jk[jk.length-1] || tut[0]*tut[1]==jk[jk.length-1] || tut[0]/tut[1]==jk[jk.length-1]){
       return true
    }
    else{
      return false
    }
  }
  console.log(check_arithmetic_Expression([10, 25, 35]))
  console.log(check_arithmetic_Expression([10, 25, 250]))
  console.log(check_arithmetic_Expression([30, 25, 5]))
  console.log(check_arithmetic_Expression([100, 25, 4.0]))
  console.log(check_arithmetic_Expression([100, 25, 25]))
//15. Write a JavaScript program to find the kth greatest element of a given array of integers 

function kth(elt,cou){
   var nelt=elt.sort()
  
   for(var r=1;r<=nelt.length;r++){
        if(r==cou){
         return elt[(nelt.length-1)-(r-1)]
        }
   }
  
}

console.log(kth([1,9,3,1,8,2,4,6,7], 7))


//16. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.

function array_max_consecutive_sum(nums, k) {
  let result = 0;
  let temp_sum = 0;
  
  for (var i = 0; i <= nums.length-k; i++) {
  for (var j = i; j < i + k; j++) {
  
  temp_sum += nums[j]
  
  }
  if(temp_sum > result ){
  result = temp_sum
  }
  temp_sum = 0;
  }
  return result;
  }
  
  console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
  console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
  console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))

//17. Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers.

  function array_max(numsk) {
    var max=[];
   
    for (var ik = 0; ik <numsk.length-1; ik++) {
     max.push(Math.abs(numsk[ik]-numsk[ik+1]))  
    
    }
    var maxp=max[0]
    for(fl=0;fl<max.length;fl++){
      if(max[fl]>maxp){
       maxp=max[fl]
      }
    }
   return maxp
    }
    
    console.log(array_max([1, 2, 3, 8, 9]))
 //18. Write a JavaScript program to find the number which appears most in a given array of integers.
    function array_num(numa) {
      var mx=[];
    
      for (var ikp = 0; ikp <numa.length; ikp++) {
        for (var kp =ikp+1; kp <numa.length; kp++) {
          
          if((numa[ikp]===numa[kp])){
              mx.push(numa[ikp]) 
             
          }
          
        }
      }
     return mx
      }
      //18.1another way
      console.log(array_num([11,2,11,1,3,8,11,5,8,7,3,3,11,3,6,11]))
function mostOccurrences(arr){
var count = 0,
max_count = 0,
result;
for (var i = 0;i <arr.length-1; i++){
for (var j = i + 1; j <arr.length-1; j++){
if (arr[i] === arr[j]){
count++;
}
}
if (count > max_count){
max_count=count
result = arr[i];
}

}
return result

}
console.log(mostOccurrences([5,2,3,6,14,3,5,5,8,5,3,3,2,4,3,7,3]));



//19. Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers. 
function array_sum(nua) {
  var max=0;
 
  for (var id = 0; id <nua.length-1; id++) {
   max+=Math.abs(nua[id]-nua[id+1])  
  
  
  }
 return max
  }
  
  console.log(array_sum([1, 2, 3, 2, -5]))

//20. Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it. 
function build_Palindrome(ad){
     var stf= ad.substring(0,ad.length-1)
     var strs=stf.split("").reverse().join("")
     return ad+strs
}

  console.log(build_Palindrome("abcddca"))
  console.log(build_Palindrome("1273"))

//20.1another way
function build(ap){
  var leep='';
  for(var hk=ap.length-2;hk>=0;hk--){
     leep+=ap[hk]
  }
  return ap+leep
}

console.log(build("abcdef"))
console.log(build("1234"))

//21. Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.

function deo(gh){
  var up=[]
  var low=[]
    for(var h=0;h<gh.length;h++){
         if(gh[h]==gh[h].toUpperCase()){
            up.push(gh[h])
         }
          if(gh[h]==gh[h].toLowerCase()){
            low.push(gh[h])
         }
    }
   if(up.length>low.length){
       return gh.toUpperCase()
   }
   if(low.length>up.length){
    return gh.toLowerCase()
   }
   if(low.length==up.length){
    return gh
   }

}
console.log(deo("AbcdeAfJ"))
console.log(deo("AbcGNJJ"))
console.log(deo("abcDFG"))

//22. Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.

function avdf(nml,bnl){
   var nma=nml.split("").sort()
   var nm=nma.join("")
   var bna=bnl.split("").sort()
   var bn=bna.join("")
    if(nm==bn){
        return true
    }
    else{
      return false
    }
}
console.log(avdf("xyz", "zxy"))
console.log(avdf("xyz", "zyyx"))

//23.Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers

function comn(vb,xc){
  var bv=[]
 for(var r=0;r<vb.length;r++){
     for(var u=0;u<xc.length;u++){
         if(vb[r]==xc[u]){
             bv.push(xc[u])
         }
      
     }
 }
if(bv.length>0){
  return true 
}
else{
  return false
}
}
console.log(comn([1,4,5], [4,7,8,9,1]))
console.log(comn([1,4,5], [7,8]))
  //23.1another way

  function comna(vb,xc){
    
   for(var r=0;r<vb.length;r++){
       if((xc.indexOf(vb[r]) !=-1)){
            return true
       }
        return false
   }

  }

  console.log(comna([1,4,5], [4,7,8,9,1]))
  console.log(comna([1,4,5], [7,8,9]))
//24.Swap pairs of adjacent digits of a given integer of even length

function tsw(df){
  var u=df.toString().split("")
  var s=[]
  var kl=[]
  if(u.length%2==0){
  for(var f=0;f<u.length;f++){
      s.push(u.slice(f,f+2))
      f=f+1
  }
  for(g=0;g<s.length;g++){
      kl.push(s[g].reverse())
     
  }
  var dfg=kl.toString().split("")
var hj=[]
  for(var gb=0;gb<dfg.length;gb++){
   if(gb%2==0){
    hj.push(dfg[gb])
   }
  
} 


  } 
  else{
    return "bijor"
  }

  return Number(hj.join(""))
}



console.log(tsw(892345))
console.log(tsw(5978343))