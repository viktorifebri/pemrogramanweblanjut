const express=require('express')
const bodyparser=require('body-parser')
const app=express()

app.use(bodyparser.urlencoded({extended:true}))

app.get('',(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})

app.post('/',(req,res)=>{

    const n1=Number(req.body.nmor1)
    const n2=Number(req.body.nmor2)

    const add=n1+n2
    res.send('Hasil='+ add)
})
app.listen(3000,(res)=>{
    console.log("server started at 3000")
})