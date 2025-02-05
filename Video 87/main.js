const { error } = require("console")
const fs = require("fs")
// console.log(fs)

console.log("oye babli")
// fs.writeFileSync("Aman.txt","Aman is a good boy")

fs.writeFile("AmanPyara.txt","Aman is a good boy ", ()=>{
    console.log("ho gaya")
    fs.readFile("AmanPyara.txt", (error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("Aman.txt", "oyeballeballeoye  can i get a oh yeah", (e, d)=>{
    console.log(d)
})
    
console.log("oye banti")
