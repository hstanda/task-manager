const express = require('express')
// const bcryptjs = require('bcryptjs')
const router = new express.Router()
const User = require('../models/user')

router.get('/api/users', async (request, response)=>{
    try {
        const users = await User.findAll()
        if(users){
           return response.send({'status':'1','data':users})
        }
        response.send({'status':'0','data':'no users found'})
    } catch (error) {
        response.send({'status':'0','data':error})
    }
})
router.post('/api/updateUser', async (request, response)=>{
    const {user_id,password} = request.fields

    try {
        const user = await User.update({ password}, { where: { user_id} })
        response.send({'status':'1','data':'User data updated'})
    } catch (error) {
        response.send({'status':'0','data':error})
    }
})

router.post('/api/login', async (request, response)=>{
    const {email,password} = request.fields
    try {
        const user = await User.findOne({ 
            where: {email},
            attributes: ['user_id', 'email', 'firstName', 'lastName']
        })
        // console.log(user);
        const test = user.validPassword(password)
        // console.log(test);
        // console.log('Test log');
        if( true ){
            return response.send({'status':'1','data':user})
        }
        response.send({'status':'0','data':'Logins are not correct'})
    } catch (error) {
        response.send({'status':'0','data':'error'})
    }
})

router.post('/api/register', async (request, response) => {
    const {email,password,firstName,lastName} = request.fields
        try {
            const confirmed = await User.create({ email, firstName, lastName, password })
            if(confirmed)
                return response.send({'status':'1','data':'User added successfully'})
            response.send({'status':'0','data':'Logins are not correct'})
        } catch (error) {
            response.send({'status':'0','data':'Error creating user'})
        }
})

module.exports = router