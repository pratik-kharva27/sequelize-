import './connection.js'
import  express  from 'express'
import db from './model/allModel.js'

const {User , Contact , Details , sequelize} = db

const app = express()
const port = 3000
app.use(express.json())

app.get('/', async (req, res) => {
    let name = await User.findAll({raw:true})

    let addr = await Contact.findAll({raw:true})

    let detail = await Details.findAll({raw:true})
    
    let new_add= [...name,...addr,...detail]
    
    res.send(new_add)
})

app.post('/add', async (req,res)=>{ 
    
    let add = await User.create(
        {
            firstName : req.body.firstName,
            lastName: req.body.lastName
        }
    )   
    let address = await Contact.create(
        {
            office_address : req.body.office_address,
            home_address: req.body.home_address
        }
    )
    let detail = await Details.create(
        {
            favoriteColor: req.body.favoriteColor,
            age: req.body.age,
            cash: req.body.cash
        }
    )
    res.send("Data added")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))