const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    return res.send('oi')
})

app.listen(3000,()=>console.log('oi'))
