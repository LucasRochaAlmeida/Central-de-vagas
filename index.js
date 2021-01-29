const express = require('express');
const bodyParser = require('body-parser');
//const mysql = require('mysql2');
const app = express();
const path = require('path');



app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))


app.get('/', (req, res)=> {
    return res.sendFile(path.join(__dirname, 'pages' ,'form.html'))
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.sendFile(path.join(__dirname, 'pages' ,'form.html'))
} )


app.listen(5000)