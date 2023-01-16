var love={
    name:"munni",
    age:25,
    location:"noakhali",
    up:["rr","qq","twwwwwwt","uu","op"]
}
delete love.name
love.job="n/a"
console.log(love.name)
//arear into object
var mehedi=["bangladesh",{nam:"abir",boys:3},"location"]
console.log(mehedi[1].nam)
//1. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var bookread=[
    {
        title:" manajir read",
        author:" shekmujibur rahman",
        read:true
    },
    {
        title:" nazmul read",
        author:" josim uddin",
        read:true
    },
    {
        title:" still readding",
        author:" bongkim condro",
        read:false
    }
]

for(i=0;i<bookread.length;i++){
   var mainbook= bookread[i].title + bookread[i].author
   if(bookread[i].read){
     console.log("he means " + mainbook)
   } 
   else{
       console.log("not read " + mainbook)
   }
}
console.log(bookread)