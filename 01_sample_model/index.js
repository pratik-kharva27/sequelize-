const express = require('express')
const sequelize = require('./models/index.js')

// const User = require('./models/user') //import user.js

const User1 = require('./models/user1')

const app = express()
const port = 3000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello sparrow.....")
})

//perticular table 
// // simply create table 
// User.sync()
// // create table in to databases 
// User.sync({force:true})

User1.sync({force:true})

// //update table details if change 
// User.sync({alert:true})

// //drop table 
// User.drop()

// User1.drop()

// //drop all table in to databases 
// sequelize.drop()

// //database name end with '_test' then execute query 
// sequelize.sync({force:true,match:/_test$/})



app.listen(port,()=>console.log(`server run ${port}`))