const express=require('express');
let mysql = require('mysql');
const cors=require('cors');

const app = express()

app.use(express.text())
app.use(express.json())
app.use(cors({origin:"http://localhost"}))


const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'panquesote7',
  database : 'garfield'
});

app.get('/:id', (req, res) => {
  console.log("Id de nuestro objeto: "+req.params.id)
  con.query(`select direccion from imagenes where id=${req.params.id}`, function (error, result,fields) {
  if (error) throw error;
  //if (req.params.id>=15415) res.send("no imagen pipipi");
    console.log("URL de nuestra imagen: "+Object.values(result[0])) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send(Object.values(result[0]));
  });
})

// app.get('/:id', (req, res) => {
//   console.log(req.query.id)
//   con.query(`select * from imagenes where id=${req.query.id}`, function (error, results,fields) {
//   if (error) throw error;
//     console.log(results);
//     res.send(results);
//   });
// })

// app.get('/inventario', (req, res) => {
//   console.log(req.query.id)
//   con.query(`select * from inventario where ID_PRODUCTO=${req.query.id}`, function (error, results,fields) {
//   if (error) throw error;
//     console.log(results);
//     res.send(results);
//   });
// })

// app.get('/inventariofull', (req, res) => {
//   console.log(req.query.id)
//   con.query(`select * from inventario`, function (error, results,fields) {
//   if (error) throw error;
//     console.log(results);
//     res.send(results);
//   });
// })

// app.post('/inventario', (req, res) => {
//   console.log(req.body)
//   con.query(`insert into inventario (Descripcion,Precio,existencia_inicial,stock,vigente) 
// 		  values ('${req.body.descripcion}',
//               ${req.body.precio},
//               ${req.body.existencia},
//               ${req.body.stock},
//               ${req.body.vigente});`
//       ,function (error, results,fields) {
//   if (error) throw error;
//     console.log(req.body);
//     console.log("Objeto insertado con exito")
//     res.send("Objeto insertado con exito");
//   });
// })

// app.put('/inventario', (req, res) => {
//   console.log(req.body)
//   con.query(`update inventario set 
//     descripcion="${req.body.descripcion}",
//     precio=${req.body.precio},
//     existencia_inicial=${req.body.existencia},
//     stock=${req.body.stock},
//     vigente=${req.body.vigente} 
//   where id_producto=${req.body.id};`
//   ,function (error, results,fields) {
//   if (error) throw error;
//     console.log(req.body);
//     console.log("Objeto editado con exito")
//     res.json(req.body);
//   });
// })

// app.delete('/inventario', (req, res) => {
//   console.log(req.query.id)
//   con.query(`delete from inventario where ID_PRODUCTO=${req.query.id}`, function (error, results,fields) {
//   if (error) throw error;
//     console.log(results);
//     console.log('Objeto eliminado con exito')
//     res.send(results);
//   });
// })



app.listen(8081,() => {
  console.log('Servidor express escuchando en proceso: 8081')
  console.log("Dirname: "+__dirname)
})