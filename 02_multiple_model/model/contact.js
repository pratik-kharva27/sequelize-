import {DataTypes} from "sequelize"
import { sequelize } from "../connection.js";

const Contact = sequelize.define('Contact', {
    office_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    home_address: {
        type: DataTypes.STRING,
        defaultValue: "vadodara"
    }
}, {
    sequelize,
    timestamps: false,
});

export default Contact