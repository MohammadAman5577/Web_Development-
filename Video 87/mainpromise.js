import fs from "fs/promises"

// isme directly await kar sakte hai 
//because humne type ko comman js se module me convert kar liya hai
// isiliye async function ke andar use karne ki koi zaroorat nahi hai

let a = await fs.readFile("Aman.txt")
let b = await fs.appendFile("Aman.txt","\n\n\n\n\n\n My name is King Floch ")
console.log(a.toString(),b)