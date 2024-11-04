let rand = Math.random()

console.log(rand)
let a = prompt("enter No1")
let c = prompt("enter operation")
let b = prompt("enter No2")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(rand > 0.1){
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

   