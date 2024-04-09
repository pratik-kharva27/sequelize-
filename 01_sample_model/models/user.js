//model is abstraction that represents a table in your database.

const { DataTypes } = require("sequelize");
const sequelize = require('./index');

// user is model name, firstname and lastname is attribute, tablename optional 

// shorthand syntax
// sequelize.define('user',{name: DataTypes.STRING})

const User = sequelize.define('user',{

    firstName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type: DataTypes.STRING,
        // //allowNull ture and defaults also 

        // //defaultvalue is kharva if any one not add last name 
        defaultValue: 'kharva'
    }
},{
    // //optional 
    // freezeTableName : false, // when we want to  model name and  table name same
    tableName: 'users', 
    // //byefault timestamps value is ture 
    // //if we want to not create createdAt and updatedAt column then we use false value 
    // timestamps: false, 
    
    createdAt:false, //createdAt column not create  
    // updatedAt:true, //updatedAt column create 
    updatedAt:'updated_At' //cnage column name 

})

module.exports=User

// there are three way to create table // user is model/table name 
//User.sync() //creates the table if it doesn't exits
//User.sync({force: true}) //if exits table then delete first and then create table again 
//User.sync({alter: true}) //if any changes in to table then update it 


// sequelize.synce() //to automatically sync all model/table apply in all model 