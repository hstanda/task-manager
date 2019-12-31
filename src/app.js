const express = require('express')
var formidable = require('express-formidable')

const port = process.env.PORT || 3000
const app = express()
app.use(formidable());
const User = require('./models/user')
const userRouter = require('./routers/users')
app.use(userRouter);

app.listen(port, ()=>{
    console.log('server is running at',port);
})