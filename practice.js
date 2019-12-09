const express = require('express')
const app = express()
const User = require('./models/user')

app.get('/api/users', (request, response)=>{
    User.findAll().then(users => {
        console.log(users);
        response.json(users)
    })   
})
app.listen(5000)