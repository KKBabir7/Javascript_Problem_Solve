//1. Write a JavaScript program to round a number to a specified amount of digits.

const round=(n,d)=>{
    return Number(`${Math.round(`${n}e${d}`)}e-${d}`)//e${d} holo tofixed er orthad dosmiker por koita songgkha hobe r e-${2}holo joto round hoice tar 2 gor age dsomic

}
console.log(round(1.005,2))


//2. Write a JavaScript program to reverse the order of the characters in the string

const strrev=(n)=>{
    return [...n].reverse().join("")
}
console.log(strrev('abir'))

//3. Write a JavaScript program to create an object composed of the properties the given function returns falsey for. The function is invoked with two arguments: (value, key).

const objstr=(obje)=>{ 
    const gh=[]
    for(x in obje){
        if(typeof obje[x]==="string"){
            gh.push(`{${x}:'${obje[x]}'}`)  
        }  
    }
    return gh
}


const obj={
    a:1,
    b:'2',
    c:3,
    h:'90'
}
console.log(objstr(obj))

//3.1another way
const objstring= (obj)=>{ 
    const objstr=Object.keys(obj).filter(p=>{
        if(typeof obj[p]==="string"){
          return p
        }   
    }).reduce((acc,properti)=>{
        acc[properti]=obj[properti]
        return acc
    },{}) 
   return objstr
}
const objS={
    a:1,
    b:'2',
    c:3,
    d:'6'
}
console.log(objstring(objS))


//4. Write a JavaScript program that takes a predicate and array, like Array.filter(), but only keeps x if pred(x) returns false.


const fourl=(cv)=>{
   const badv=cv.filter(x=>{
        if(x.length<=4){
           return x
        }
        else{
            return false
        }
   })
   return badv
}

console.log(fourl(['taii','abirii','duep','loveu']))
//4.1 anthoer way
const fourr=(con,cv)=>{
    const badv=cv.filter((...x)=>{
        return con(...x)
    })
    return badv
 }
 
 console.log(fourr((word)=>{
    return word.length<=4
 },['taiiin','abi','duueep','loveu']))

 //5. Write a JavaScript program to apply a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.

const reduceag=(arr)=>{
    const allslice=arr.reduce((acc,v,i,arr)=>{  
       acc.push(arr.slice(0,i+1))
       return acc
    },[]).map(allarr => allarr.reduce((acc, carv) => acc += carv,0));
   return [0].concat(allslice)
}
 console.log(reduceag([1,2,3,6,8,14]))

 //6. Write a JavaScript program to redirect to a specified URL.

// const redi=(link,asp=true)=>{
//  return asp?(window.location.href=link) :window.location.replace(link)
// }
// console.log(redi('https://google.com'))

//163 Write a JavaScript program to convert a number in bytes to a human-readable string
const bytes=(num)=>{
    
      if(num<=999999){

          return `${num/1000}  kb`
      }
     if(num>=1000000){
        return `${num/1000000}  mb` 
     }
}


console.log(bytes(9999990))

//7. Write a JavaScript program to perform left-to-right function composition. 

const add=(...allnum)=>{
   const alladd= allnum.reduce((acc,cv)=>{
         return  (acc*cv)+5
   })
   return alladd
}
console.log(add(10,5))

//8..Perform left-to-right function composition for asynchronous functions

const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
const sum = pipeAsyncFunctions(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4
);
(async () => {
  console.log(await sum(5)); // 15 (after one second)
})();

//9. Write a JavaScript program to calculate how many numbers in the given array are less or equal to the given value using the percentile formula.

const percentile = (arr, num) =>{
  const res=  arr.filter((item)=>{
       return item<=num
    })
    return ((res.length)/arr.length)*100
} 
console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)) 
console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)) 
console.log(percentile([1, 2, 3, 4, 5, 6],3)) 
console.log(percentile([1, 2, 3, 4, 5, 6],4))




//10. Write a JavaScript program to create a function that invokes fn with partials appended to the arguments it receives.

const partialRight=(cbfn,...x)=>{
      return cbfn('Hello',...x)
}

const greetJohn=(fname,lname)=>{
    return `${fname}  ${lname} !`
}

console.log(partialRight(greetJohn,'john'))


//11. Write a JavaScript program to parse an HTTP Cookie header string and return an object of all cookie name-value pairs.

const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2'));

//12. Write a JavaScript program to create a function that invokes the provided function with its arguments transformed. 

const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));
const square = n => n * n;
const double = n => n * 2;
const fn = overArgs((x, y) => [x, y], [square, double]);
console.log(fn(9,3));
console.log(fn(5,2));

//12.1 another

const squre=(n)=>{
    return n*n
}
const doubl=(n)=>{
    return n*2
}

const fn1=(x,y)=>{
   const sq=squre(x)
   const dub=doubl(y)
   return [sq,dub]
}

console.log(fn1(9,3));









//12.2 invoking

function scaling(num1, num2, num3)
  {
    return [1 * num1, 2 * num2, 3 * num3];
  }
  function transformer(num1, num2, num3)
  {
      var tran=scaling(num1, num2, num3);
      console.log(tran);
  
  }
  var num1=5;
  var num2=5;
  var num3=5;
  transformer(num1, num2, num3);

//12.3 invoking
  var arr =
  [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
function findEven(ar){
var res1 = [];
for (let geek = 0; geek < ar.length; geek++) {
    if (ar[geek] % 2 === 0) {
        res1.push(ar[geek]);
    }
}
return res1;
}

function findOdd(ar){
var res2 = [];
for (let geek = 0; geek < ar.length; geek++) {
    if (ar[geek] % 2 === 1) {
        res2.push(ar[geek]);
    }
}
return res2;
}

function segregateEvenOdd(arr) {

//12.4 Invoking findEven and findOdd functions
var even = findEven(arr);
var odd = findOdd(arr);
console.log("Before Segregation: ");
console.log(arr);
console.log("After Segregation: ");
console.log("Even integers: " + even);
console.log("Odd integers: " + odd);
}

//12.5 Invoker
segregateEvenOdd(arr);

//13. Write a JavaScript program to get the nth element of an given array.

const nthElement=(arr,n)=>{
return (n>=1?arr.slice(n,n+1) : arr.slice(n))
}
console.log(nthElement(['a', 'b', 'c'], 1));

console.log(nthElement(['a', 'b', 'c'], 0));
//14. Write a JavaScript program to get the n minimum elements from the provided array. If n is greater than or equal to the provided array's length, then return the original array(sorted in ascending order).
const minElement=(arr,n)=>{
   return [...arr].sort((a,b)=>{
    return a-b
   }).slice(0,n)
}

console.log(minElement([11,7,8,5,6,8],2));
console.log(minElement([11,12,2,4,6,35],3));




//15. Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function.
 const minNum=(arr)=>{
    const getMinNum= [...arr].map((cv,i,arr)=>{
          return  arr[i].n
    })
    return Math.min(...getMinNum)
 }
console.log(minNum([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]));


//16. Write a JavaScript program to create a new object from the combination of two or more objects.


const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
        return acc;
      }, {}),
    {}
  );
const object = {
    a: [{ x: 2 }, { y: 4 }],
    b: 1
  };
  const other = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
  };
  console.log(merge(object, other));