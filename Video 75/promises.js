console.log("This is about proises")

let prom1=new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0,.5){
        reject("this no is less than 0.5")
    }
    setTimeout(() => {
        console.log("I am done")
        resolve("Aman")
    }, 2000);
})

prom1.then((a)=>{
    console.log(a)
})