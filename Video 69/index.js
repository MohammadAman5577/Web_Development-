let a = 5
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return c
}


function fact(number){
    let fact=1
    for (let index = 1; index <= number; index++) {
        fact=fact*index
    }
    return fact
}
console.log(factorial(a))
console.log(fact(a))