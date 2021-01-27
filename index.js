const express = require('express');
const bodyParser = require('body-parser');
//const mysql = require('mysql2');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


const db = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'Xk2ag47HQ4luca$',
        database: 'centralDeVagas'
});



/* db.connect( (err)  => {//Conectando
    if(err) throw err;
    console.log('MySQL conectado...');
});


app.get('/select', (req, res) => {
    let sql = "SELECT * FROM tarefas";
    db.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
    })
})

app.post('/insere', (req, res) => {
    let post = 
            {titulo: req.body.titulo, 
            descricao: req.body.descricao, 
            grau: req.body.urgencia, 
            tipoRealizacao: req.body.tipoTarefa, 
            repeticoes: req.body.numeroRepeticoes
            }
    let sql = 'INSERT INTO tarefas SET ?';
    let query = db.query(sql, post, (err, result) => {
            if(err) throw err;
            res.send("Post added");
    })
}) */


app.listen(5000, () => console.log('rodando'))

app.get('/', (req, res) => res.send('server rodando') )

app.post('/', (req, res) => {
        console.log(req.body)
        res.send('../pages/form.html')
} )