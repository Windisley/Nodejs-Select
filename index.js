
(async()=>{
    const bd =await require("./db").read
    const pessoas = await bd()
    console.log(pessoas)
})()

