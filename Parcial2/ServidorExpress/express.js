const express = require('express');
const cors =require('cors');
const { json } = require('express');
const app = express();
const cadena = require('./cadena')
const port=8081;

app.use(cors({origin:"http://localhost"}))
app.use(express.text())
app.use(express.json())//middleware

const morgan = require('morgan');
const fs = require('fs');
const path = require('path');


// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))



app.use((req, res,next)=> {
    console.log("Esta es un middleware")
    next()  
},(req, res,next)=> {
    console.log("Segunda funcion middleware")
    next()
})

app.get('/', (req, res) => {
    //res.send('Servidor Express contestando: 8081')
    res.sendFile('./static/index.html',{root:__dirname},(err)=>{console.log('Archivo enviado')})
})

app.get('/suma', (req, res) => {
    console.log(req.query)
    let suma=parseInt(req.query.x)+parseInt(req.query.y)
    res.send('La suma es '+ suma)
})

app.get('/mayusculas/:cadena', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.post('/texto', (req,res)=>{
    console.log(req.body)
    let may =cadena.pasarMayusculas(req.body)
    let sinesp=cadena.quitarEspacios(req.body)
    let longi =cadena.obtenerLongitud(req.body)
    // let may = req.body.toUpperCase()
    // let sinesp=req.body.trim()
    // let longi =req.body.length
    res.json({  mayusculas:may,
                sinespacios: sinesp,
                longitud:longi
    })
})

app.post('/json', (req,res)=>{
    console.log(req.body.nombre)
    let cadena = 'Hola '+req.body.nombre+" "+req.body.apellido+" como estas?"
    res.json({saludo:cadena})
    
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


