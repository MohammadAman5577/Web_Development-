console.log("Hello Aman")
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor="red"

// let pyara_box =document.getElementById("Aman")
// pyara_box.style.backgroundColor= "pink"

// document.getElementById("Aman").style.backgroundColor="yellow"
// document.querySelector(".box").style.backgroundColor="brown"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach( arrowFun=>{
    arrowFun.style.backgroundColor="yellow"
})
