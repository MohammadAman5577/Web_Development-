//Backend js is used as  business logic because we do not want any one to know about our logic
// it will not be visible to the client



// console.log("Hello World")
// console.log(" Gian Goda ")

const slugify = require('slugify')

let a = slugify('some string')
console.log(a)

//if I prefer something else other than this "-" matlab kuch bhi " "
const c =slugify('some string', '_')

const b= slugify('lappi@#$@#@##cacpstone','_',' ')
console.log(b)