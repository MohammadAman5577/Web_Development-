let a = 6
let arr=[];
for(let i=1; i<=a; i++){
    arr.push(i);    
}
console.log(arr)   
let fac=1;

while (arr.length){
    num=arr.pop()
    fac*=num;
    console.log(fac, arr.length);
}