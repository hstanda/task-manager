const chalk = require('chalk')
const logError = (error) =>{
    console.log(chalk.bold.red.inverse(' '+error+ ' '))
}
const logMessage = (message) =>{
    console.log(chalk.bold.green.inverse(' '+message+ ' '))
}

module.exports = { logMessage, logError }