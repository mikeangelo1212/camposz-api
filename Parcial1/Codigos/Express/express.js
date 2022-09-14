const express = require('express');
const app = express();
const cors =require('cors')

app.get('/', (req, res) => {
    res.send('Servidor Express contestando: 8081')

})
app.use(cors({origin:"http://localhost:8081"}))

app.post('/', (req, res) => {
    res.send('hiciste ')
})

app.listen(8081,() => {
    console.log('Servidor express escuchando en proceso: 8081')
})

