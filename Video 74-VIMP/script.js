let button = document.getElementById("btn")
button.addEventListener("dblclick",(e)=>{
    document.querySelector(".container").innerHTML = "<b>You have clicked Correctly</b> "
})

button.addEventListener("contextmenu", ()=>{
    alert("You are caught")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key)
})

