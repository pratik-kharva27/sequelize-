import express from 'express';
import User from './model/user.js';
import { sequelize } from './connection.js';

const app = express();
const port = 8000;
app.use(express.json());

app.get('/', async (req, res) => {
   let detail = await User.create({rollNo:'02',fistName:"PARVEZ"});
   res.send("data add successfully!!")
})

const project = await User.findOne({ where: { rollNo: '02' } ,raw:true});
if (User === null) {
  console.log('Not found!');
} else {
  console.log(project,"sparrow"); // true
//   console.log(project.title); // 'My Title'
}

User.update({fistName:'PRATIK'},{where:{fistName:'PARVEZ'},},);

User.destroy({ where:{fistName:'sparrow',},},);

// sequelize.sync();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))