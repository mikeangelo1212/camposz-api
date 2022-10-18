const express=require('express')
let mysql = require('mysql');


const app = express()

app.use(express.text())
app.use(express.json())

// app.get('pasteleria/:id_producto',async(req,res)=>{
//   const DataID=req.params.id_producto;
//   console.log(DataID);
//   const [responseDB] =await pool.query(`select *from inventario where id_producto=${DataID};`);
//   res.json(responseDB);
// })


const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'panquesote7',
  database : 'pasteleria'
});

// app.get('/consulta/:id_producto', (req, res) => {
//   console.log(req.query.id_producto)
//   con.query(`select * from inventario where ID_PRODUCTO=${req.params.id_producto}`, function (error, results,fields) {
//   if (error) throw error;
//     res.send(results);
//   });
// })

app.get('/consulta', (req, res) => {
  console.log(req.query.id)
  con.query(`select * from inventario where ID_PRODUCTO=${req.query.id}`, function (error, results,fields) {
  if (error) throw error;
    console.log(results);
    res.send(results);
  });
})

app.listen(8081,() => {
  console.log('Servidor express escuchando en proceso: 8081')
  console.log("Dirname: "+__dirname)
})