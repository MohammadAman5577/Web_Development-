let arr = [1,2,3,4,5]

// let newArr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
// console.log(newArr)

let newArr =arr.map((e)=>{
    return e**2
})
console.log(newArr)


// YE BATA RAH HAI KI ISME SE KAUN SE ELEMENTS 7 SE BADE HAI


const greaterThanSeven = e=>{
    if(e>7){
        return true
    }
    return false
} 
console.log(newArr.filter(greaterThanSeven))


// for reducing a functoin and getting a singlular numeric value we use reduce fn

let arr2= [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}
console.log(arr2.reduce(red))