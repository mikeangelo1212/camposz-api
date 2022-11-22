const express=require('express')
let mysql = require('mysql');
const path = require('path')
const cors=require('cors')
const ruta =require('./router')
const swaggerUI =require('swagger-ui-express')
const swaggerJsDoc=require('swagger-jsdoc')
const app = express()


const swaggerOptions = {definition: 
  {openapi: '3.0.0',info: 
  {title: 'API Empleados',
  version: '1.0.0',      
  },
  servers:[            
    {url: "http://localhost:8081"}        
          ],      
    },
    apis: [
      `${path.join(__dirname,"./router.js")}`
    ],  
                      };

const swaggerDocs=swaggerJsDoc(swaggerOptions)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs))

app.use(ruta.router)
app.use(express.text())
app.use(express.json())
app.use(cors({origin:"http://localhost"}))


const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'panquesote7',
  database : 'garfield'
});

app.listen(8081,() => {
  console.log('Servidor express escuchando en proceso: 8081')
  console.log("Dirname: "+__dirname)
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