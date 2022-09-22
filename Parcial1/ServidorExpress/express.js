const express = require('express');
const cors =require('cors')

const app = express();
app.use(cors({origin:"http://localhost"}))


app.get('/', (req, res) => {
    //res.send('Servidor Express contestando: 8081')
    res.sendFile('./static/index.html',{root:__dirname},(err)=>{console.log('Archivo enviado')})
})

app.post('/', (req, res) => {
    res.json({Usuario:"Miguel"})
    res.send('Se hizo')
})

app.use(function (req, res) {
    res.status(404).sendFile("./static/404.html",{root:__dirname})  
})

app.listen(8081,() => {
    console.log('Servidor express escuchando en proceso: 8081')
    console.log("Dirname: "+__dirname)
})


