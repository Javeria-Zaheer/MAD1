// .filter() 
console.log(".filter() method")
const names=["javeria","laiba","ayesha"];
names.filter((Name)=>
{
    return Name!="laiba";
}
)

console.log("---------------")

//         .filter correct method
console.log(".filter() correct method ")
const arr=["javeria","laiba","ayesha"];
const array=names.filter((Name)=>
{
    return Name!="laiba";
}
)

console.log(array);
