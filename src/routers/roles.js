const express = require('express')
const router = new express.Router()
const Role = require('../models/role')
const { sequelize ,Sequelize } = require('../models/index')



router.post('/api/role/add', async (request, response) => {
    const {title,description} = request.fields
    try {
        const titleExist = await Role.findOne({ 
            where: {
                title
                }
        })

        if(titleExist){
            return response.send({'status':'0','data':'Role title exists'})    
        }
        const confirmed = await Role.create({ title, description })
        if(confirmed)
        return response.send({'status':'1','data':'Task added successfully'})
        
    } catch (error) {
        response.send({'status':'0','data':'Invalid Fields'})
    }
})

router.post('/api/role/list', async (request, response) => {
        try {            
            const roles = await Role.findAll()
            if(roles){
                return response.send({'status':'1','data':roles})
             }
             response.send({'status':'0','data':'no Role found'})
            
        } catch (error) {
            response.send({'status':'0','data':'Invalid Fields'})
        }
})

router.post('/api/role/update', async (request, response)=>{
    const {role_id, title, description} = request.fields
    try {
        const roleExist = await Role.findOne({ where: {role_id}})
        if(roleExist)
        {
            const updated = await Role.update({ title, description}, { where: { role_id} })
            if(updated){
                response.send({'status':'1','data':'Role data updated'})
            }else{
                response.send({'status':'0','data':'Error in database'})
            }
        }else{
            response.send({'status':'0','data':'Role id is not valid'})
        }
    } catch (error) {
        response.send({'status':'0','data':'Error in database'})
    }
})

router.post('/api/role/delete', async (request, response) => {
    const {role_id} = request.fields
        try {
            const destroy = await Role.destroy({ where: {role_id}})
            if(destroy)
            {
                return response.send({'status':'1','data':'Role Deleted successfully'})
            }else{
                response.send({'status':'0','data':'Role id is not valid'})
            }
        } catch (error) {
            response.send({'status':'0','data':'Invalid Fields'})
        }
})



module.exports = router