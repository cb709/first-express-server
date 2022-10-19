const express = require('express')
const users = require('./users.json')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    const response = `<h1>Hello World</h1>`
    res.send(response)
})

app.get('/users', (req, res)=> {
    res.send(users)
})

app.get('/users/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id ) || {}
    res.send(user)
})

app.listen(port, ()=>{
    console.log(`Running on port: ${port}`)
})