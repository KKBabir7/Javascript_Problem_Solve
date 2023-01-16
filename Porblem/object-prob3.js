//1 Find the length of an object
var  tanha={
    name:"abir",
    age:10
}
console.log(Object.keys(tanha).length)

//2. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

function display(libary){

    for(var i=0;i<libary.length;i++){
        if(libary[i].stutas==true){
          console.log("read the book " +libary[i].title + " of " + libary[i].autor)
        }
        else if(libary[i].stutas==false){
           console.log("still read the book " +libary[i].title + " of " + libary[i].autor)
         }
   }
   
}
var libary=[
    {
        autor:"bil gates",
        title:"micrsoft",
        stutas:true
    },
    {
        autor:"jops bejops",
        title:"amazon",
        stutas:false
    },
    {
        autor:"mark",
        title:"meta",
        stutas:true
    }
    
]

display(libary)