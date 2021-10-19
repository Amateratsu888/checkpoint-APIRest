const  express = require('express')
const mongoose  = require('mongoose')
const app = express()

//importation du modele users
const users =require('./models/User')

//for our server to be able to read the “body” of an incoming JSON object
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// connection a la base de donnée
mongoose.connect('mongodb://localhost/apirest')

// Definition des routes

// GET
app.get('/users',(req,res) => {
    users.find((err,data)=>{
        if (err) res.send(err)
        res.json(data)
    })
})

//POST 
app.post('/users',(req,res) => {
    users.create(req.body,(err,data)=>{
        if (err) res.send(err)
        res.json(data)
    })
})

//PUT
app.put('/users/:id',(req,res) => {
    users.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
        if (err) res.send(err)
        res.json(data)
    })
})

//DELETE
app.delete('/users/:id',(req,res) => {
    users.findByIdAndRemove(req.params.id,(err,data)=>{
        if (err) res.send(err)
        res.json(data)
    })
})

//start server
app.listen(3000, ()=> console.log('server start on http://localhost:3000'))
