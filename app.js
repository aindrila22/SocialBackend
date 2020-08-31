
const express = require('express')
const app = express()
const mongoose = require('mongoose')


require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


const {MONGOURI} = require('./keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("you are connected to mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting", err)
})
app.listen(5002,function(req,res){
    console.log("server is running on 5002")
})