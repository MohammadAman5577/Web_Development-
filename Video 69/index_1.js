let a  =10
function factorial(number){
    let arr = Array.from(Array(numbers).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
}
factorial(a)