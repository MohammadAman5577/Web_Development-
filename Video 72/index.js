console.log("this is my first coloring page")
let a = document.getElementsByClassName("box")
console.log(a)
// a[2].style.backgroundColor="red"
// a[1].style.backgroundColor="grey"
let b= document.querySelector(".container").children
// console.log(b)
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* (255));
    let val2 =Math.ceil(0 + Math.random()* (255));
    let val3 = Math.ceil(0 + Math.random()* (255));

    return `rgb(${val1} ${val2} ${val3})`
}
Array.from(a).forEach(e=>{
    e.style.color= getRandomColor()
    e.style.backgroundColor= getRandomColor()
})
