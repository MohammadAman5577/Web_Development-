
console.log("I am a tutorial on Loops")



let stud = {
    name: "Amamn",
    role: "Programmer",
    company: "Aman AI"
}
for (const key in stud) {
    // // if (Object.prototype.hasOwnProperty.call(stud, key)) {
        const element = stud[key];
        
    // // }
    console.log(key,stud)
}

