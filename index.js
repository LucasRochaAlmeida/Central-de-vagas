const express = require('express');
const bodyParser = require('body-parser');
//const mysql = require('mysql2');
const app = express();
//const path = require('path');



app.use(express.urlencoded({ extended: true }))


function pag(req, res){
        return res.render('form.html')
    }



app
.get('/', pag)

//.post('/', pag)


app.listen(5000)