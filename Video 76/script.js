// getdata promise ko dega

// async function getData(){
    //promise ko simulate karne ke liye aise bana sakte hai
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }

async function getData(){
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x= await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

    let data = await x.json() //jab hum await karte hai to ye x.json me value parse karne me kuch time leta hai
    //.JSON KE JAGAH AGAR TEXT use karenge to data string me aayega
    //.json matlab javascript object
 
    console.log(data) //to is url ka data aa jata hai
     return 455
}



// main function me wrap kar diya 
async function main(){

    console.log("Loading modules")
    console.log("Do something else")
    
    console.log("Load data")
    
    let data= await getData()
    // await use kare ke liye mughe ek aur function ke andar wrap karna hoga

    console.log(data)

    console.log("process data")
    console.log("Task 2")
}
main()

//agar hame yeha se neeche wale code ko bhi rokna hai to use callback function bana denge

// agar me chaata hu ki ye sab bhi na aaye jab tak data na aaye 
// to me ye bhi kah sakta hu ki data ek promise hai ka bhi upyog kar sakta
// ye callback approach hai 
