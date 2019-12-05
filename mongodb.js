const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const helper = require('./utils/helper')
const { logError,logMessage } = helper
// database variables
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'db-task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client) => {
    if(error){
     return  logError(error)
    }
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Harjeevan',
        age: '30',
        test: 'new'
    })
})