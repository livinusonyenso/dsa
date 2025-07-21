const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('welcome livinus')
    // console.log("req",req)
    console.log("res",res)
})

app.listen(3000,()=>{
     console.log('Server is running on http://localhost:3000')

})
console.log('expressjs running on port 3000')