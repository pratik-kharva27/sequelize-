import { DataTypes,Model } from "sequelize";
import { sequelize } from "../connection.js";

class User extends Model{};

User.init({
    rollNo:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    fistName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        defaultValue:'kharva'
    }
},{
    sequelize,
    modelName:'User',
    tableName:"employee"
})

export default User;