const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const User = require('../models/user')
app.get('/api/users', (request, response)=>{
    User.findAll().then(users => {
        response.json(users)
    })
})
// User.create({ email: 'hstanda@gmail.com', firstName: 'Harwinder', lastName: 'Tanda', password: '123465' })
app.listen(port, ()=>{
    console.log('server is running at',port);
})