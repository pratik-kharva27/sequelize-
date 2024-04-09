import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../connection.js";
import  User  from "./employee.js"
import  Contact  from './contact.js'
import Details from "./details.js"

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User
db.Contact = Contact
db.Details = Details

sequelize.sync({force:true})

export default db;