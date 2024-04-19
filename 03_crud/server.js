import express from 'express';
import User from './model/user.js';
import { sequelize } from './connection.js';
import { Op } from 'sequelize';

const app = express();
const port = 8000;
app.use(express.json());

// app.get('/', async (req, res) => {
//    let detail = await User.create({rollNo:'05',fistName:"suraj"}); // insert qurey 
//    res.send("data add successfully!!")
// })

// const project = await User.findOne({ where: { rollNo: '02' } ,raw:true}); //find pertiqular item query 
// if (User === null) {console.log('Not found!');} 
// else {console.log(project,"sparrow"); // true
// }

// User.update({fistName:'PRATIK'},{where:{fistName:'PARVEZ'},},); //update query with where clauses

// User.destroy({ where:{rollno:'2',},},); // delect query 

// const all = await User.findAll(); // query "select * from table" 
// console.log(all,"sparrow");

// const specific = await User.findAll({attributes:['rollNo'],}); //sparcific item display 
// console.log(specific,"pratik");

// sequelize.sync(); // table create query 

// -------------------apply where clauses--------------------------------

//  Promise handle using await

// const name = await User.findAll({where:{fistName:'PRATIK'},},);
// console.log(name,"hello");

//   const ope = await User.findAll({where:{ id:{ [Op.eq]:10},},raw:true},);
//   console.log(ope,"hello");

// promise handle using then  (AND)
// const and = User.findAll({where: {[Op.and]: [{ rollNo: 4 }, { lastName: 'kharva' }],},raw:true});
// and.then(
//    (value) => {
//      console.log(value); // Success!
//    },
//    (reason) => {
//      console.error(reason); // Error!
//    },
//  );

// promise handle using then (OR)
// const or = await User.findAll({where: {[Op.or]: [{ id: 11 }, { rollNo: 3 }],},raw:true});
// console.log(or,"sparrow");

// const inoprator = await User.findAll({where: {id: [7, 8, 9],},raw:true}); // Same as using `id: { [Op.in]: [1,2,3] }`
// console.log(inoprator,"operator");   



app.listen(port, () => console.log(`Example app listening on port ${port}!`));