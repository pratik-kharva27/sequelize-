import { Sequelize} from "sequelize"

export const sequelize = new Sequelize("mydb","root","",{
    host:'localhost',
    logging:false, //query log not display in terminal 
    dialect:'mysql'
})

try {
    sequelize.authenticate()
    console.log("connection done...");
    
} catch (error) {
    require
    console.log("connection not done......");
}
