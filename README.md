For running local machine use 
## Installation
* Install [mysql](https://dev.mysql.com/doc/)
* Install [NodeJS](https://nodejs.org/en/download/)
* Install [PostManCollectionForAPI](https://www.getpostman.com/collections/f8f21dd457ff019f20f7/)
* `sudo apt install npm`  // for ubuntu 
* `npm install`
* `Add database logins to /config/config.json`
* `sequelize db:migrate`
* `npm run start dev`
* Open your browser on http://127.0.0.1:3000

## Important links
* [sequelize](https://sequelize.org/master/manual/getting-started.html)
* creating new migration `sequelize migration:create --name migration_name_here`