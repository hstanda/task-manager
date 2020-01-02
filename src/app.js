const express = require('express')
var formidable = require('express-formidable')

const port = process.env.PORT || 3000
const app = express()
app.use(formidable());

// const userRouter = require('./routers/users')
// const tasksRouter = require('./routers/tasks')
app.use(require('./routers/users'));
app.use(require('./routers/tasks'));

app.get('*', (request, response)=>{
    response.send({'status':'0','data':'Not a valid URL'})
})
app.post('*', (request, response)=>{
    response.send({'status':'0','data':'Not a valid URL'})
})
app.listen(port, ()=> {
    console.log('server is running at',port);
})