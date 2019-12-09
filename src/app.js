const express = require('express')
var bodyParser = require('body-parser')
var formidable = require('express-formidable')

const port = process.env.PORT || 3000
const app = express()
app.use(formidable());
const User = require('../models/user')

app.get('/api/users', (request, response)=>{
    User.findAll().then(users => {
        response.json(users)
    })
})


app.post('/api/updateUser', (request, response)=>{
    const {user_id,password} = request.fields
    User.update({ password}, {
        where: { user_id}
    })
    .then(() => {
        response.send({'status':'1','messsage':'Password updated'})
    })
    .catch(() =>{
        response.send({'status':'0','messsage':'Error saving to database'})
    })
})


app.post('/api/login', (request, response)=>{
    const {email,password} = request.fields
    User.findOne({ 
        where: {email, password},
        attributes: ['user_id', 'email', 'firstName', 'lastName']
    })
    .then(user => {
        response.send({'status':'1','data':user})
    })
    .catch(() =>{
        response.send({'status':'0','messsage':'user not found!'})
    })
})
app.post('/api/register', (request, response) => {
    const {email,password,firstName,lastName} = request.fields
     User.create({ email, firstName, lastName, password })
        .then((result) => {
            response.send({'status':'1','messsage':'User added successfully'})
        }).catch((error) =>{
            console.log(error);
            response.send({'status':'0','messsage':'Error saving to database'})
        })
})
app.listen(port, ()=>{
    console.log('server is running at',port);
})