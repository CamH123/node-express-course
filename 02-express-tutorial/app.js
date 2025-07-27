const express = require('express')
const app = express()
let {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.get('/api/people', (req, res) => {
    res.status(200).json({sucess:true, data:people})
})

app.post('/api/people', (req, res) => {
    const{name} = req.body
    if (!name){
        return res.status(400).json({sucess:false, msg:'please provide name value'})
    }
    res.status(201).json({sucess:true, person : name})
})

app.post('/login', (req, res) =>{
    const{name} = req.body;
    if (name){
        return res.status(200).send(`Welcone ${name}`)
    }
    res.status(401).send('Please send credentials')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})