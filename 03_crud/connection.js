import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize( "student","root", "proses1412",{
    host:"localhost",
    dialect:"mysql"
})  
try {
    sequelize.authenticate()
    console.log("connection doen ");
} catch (error) {
    console.log(error,"connection not done ");
}

