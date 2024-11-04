
let a = document.getElementById('number1').value
let c = document.getElementById('operator').value
let b = document.getElementById('number2').value


let d = eval(`${a} ${c} ${b}`)

document.getElementById("demo").innerHTML = d;


// console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
// alert(`The result is ${eval(`${a} ${c} ${b}`)}`)


