// const fsPromises = require('fs').promises
// const path = require('path')



// const fileOps = async ()=>{
//     try{
//         const data = await fsPromises.readFile(path.join(__dirname,"data.txt"),"utf-8")
//         console .log(data)

//     }catch (err){
//         console.error(err)
//     }
// }

// fileOps();


// fs.writeFile(path.join(__dirname,"reply.txt"),"abo khaled wa7ed bs",(err)=>{
//     if (err) throw err
//     console.log("Write complete");
//     fs.appendFile(path.join(__dirname,"reply.txt"),"تعرف مين في الطالبية ؟",(err)=>{
//         if (err) throw err
//         console.log("append complete");
//     })
// })




// process.on('uncaughtException',aboNesma=>{
//      console.error(`there is error ${aboNesma}`);
//     process.exit(1);
// })


// const myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Good")
//     }, 2200)
// });

// function readData() {
//     console.log("Before Promise");

//     myPromise.then(
//         (res) => console.log(res),
//         (rej) => console.log(rej)
//     )

//     // setTimeout(() => {
//     console.log("after Promise")
//     // }, 3200)

// }
// readData()
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        if (location == "Google") {
            resolve("Google say Hi")
        } else {
            reject("We can talk only to google")
        }
    })
}
function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log(`processing response`)
        resolve(`Extra INFO + ${response}`)
    })
}
makeRequest("Googsle").then(response => {
    console.log(`Response Received`)
    console.log(`${response} from there`)
    return processRequest(response)
})
    .then(processedResponse => {
        console.log(processedResponse)
    }).catch(err => {
        console.log(`${err}`)
    })