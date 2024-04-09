import {DataTypes} from "sequelize"
import { sequelize } from "../connection.js";

const Details = sequelize.define('details', {
    
    favoriteColor: 
        {
            type: DataTypes.TEXT,
            defaultValue: 'green'
        },
        age:  {
            type:DataTypes.INTEGER
        },
        cash: {
            type:DataTypes.INTEGER
        },
}, {
    sequelize,
    timestamps: false,
});

export default Details