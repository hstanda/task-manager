const express = require('express')
const bcryptjs = require('bcryptjs')
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
        const salt = await bcryptjs.genSalt(8)
        hashedPassword = await bcryptjs.hash(password, salt)
        const updated = await User.update({ password: hashedPassword}, { where: { user_id} })
        if(updated){
            response.send({'status':'1','data':'User data updated'})
        }else{
            response.send({'status':'0','data':'Error in database'})
        }
    } catch (error) {
        response.send({'status':'0','data':'Error in database'})
    }
})

router.post('/api/login', async (request, response)=>{
    const {email,password} = request.fields
    try {
        const user = await User.findOne({ 
            where: {email}
        })
        const isMatch = await user.validPassword(password)
        if( isMatch ){
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
            const userExist = await User.findOne({ where: {email}})
            if(!userExist)
            {
                const confirmed = await User.create({ email, firstName, lastName, password })
                if(confirmed)
                return response.send({'status':'1','data':'User added successfully'})
            }
            response.send({'status':'0','data':'Email already exist'})
        } catch (error) {
            response.send({'status':'0','data':'Error creating user'})
        }
})

module.exports = router