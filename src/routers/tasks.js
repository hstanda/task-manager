const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const Task = require('../models/task')
const { sequelize ,Sequelize } = require('../models/index')

router.post('/api/task/update', async (request, response)=>{
    const {task_id, title, description} = request.fields
    const Op = Sequelize.Op
    try {
        const titleExist = await Task.findOne({ 
            where: {
                task_id: { [Op.not]: task_id },
                title
             }
        })
        if(titleExist){
            return response.send({'status':'0','data':'Task title exists'})    
        }
        const updated = await Task.update({ title, description}, { where: { task_id} })
        if(updated){
            response.send({'status':'1','data':'Task updated'})
        }else{
            response.send({'status':'0','data':'Error in database'})
        }
    } catch (error) {
        response.send({'status':'0','data':'Error in database'})
    }
})

router.post('/api/task/add', async (request, response) => {
    const {user_id,title,description} = request.fields
        try {
            const userExist = await User.findOne({ where: {user_id}})
            if(userExist)
            {
                

                const titleExist = await Task.findOne({ 
                    where: {
                        user_id,
                        title
                     }
                })

                if(titleExist){
                    return response.send({'status':'0','data':'Task title exists'})    
                }
                const confirmed = await Task.create({ title, description, user_id })
                if(confirmed)
                return response.send({'status':'1','data':'Task added successfully'})
            }else{
                response.send({'status':'0','data':'User id is not valid'})
            }
        } catch (error) {
            response.send({'status':'0','data':'Invalid Fields'})
        }
})
router.post('/api/task/delete', async (request, response) => {
    const {task_id} = request.fields
        try {
            const destroy = await Task.destroy({ where: {task_id}})
            if(destroy)
            {
                return response.send({'status':'1','data':'Task Deleted successfully'})
            }else{
                response.send({'status':'0','data':'Task id is not valid'})
            }
        } catch (error) {
            response.send({'status':'0','data':'Invalid Fields'})
        }
})

router.post('/api/task/list', async (request, response) => {
    const {user_id} = request.fields
        try {
            const userExist = await User.findOne({ where: {user_id}})
            if(userExist)
            {
                const userTasks = await Task.findAll({ where: {user_id}})
                return response.send({'status':'1','data':userTasks})
            }else{
                response.send({'status':'0','data':'User id is not valid'})
            }
        } catch (error) {
            response.send({'status':'0','data':'Invalid Fields'})
        }
})

module.exports = router