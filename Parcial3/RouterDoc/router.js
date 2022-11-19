const express=require('express')
let mysql = require('mysql');
const cors=require('cors')
const router = express.Router()
const app = express()


// router.get('pasteleria/:id_producto',async(req,res)=>{
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

// router.get('/consulta/:id_producto', (req, res) => {
//   console.log(req.query.id_producto)
//   con.query(`select * from inventario where ID_PRODUCTO=${req.params.id_producto}`, function (error, results,fields) {
//   if (error) throw error;
//     res.send(results);
//   });
// })

/** 
 * @swagger
 * /inventario:
 *  get:
 *   description: Selecciona un objeto con id en el header
 *   responses:
 *    200:
 *     description: Esto permite hacer una consulta al inventario
 * 
*/

router.get('/inventario', (req, res) => {
  console.log(req.query.id)
  con.query(`select * from inventario where ID_PRODUCTO=${req.query.id}`, function (error, results,fields) {
  if (error) throw error;
    console.log(result);
    res.send(results);
  });
})

/** 
 * @swagger
 * /inventariofull:
 *  get:
 *   description: Trae todo el inventario en jsons
 *   responses:
 *    200:
 *     description: Esto permite hacer una consulta a todo el inventario
 * 
*/

router.get('/inventariofull', (req, res) => {
  console.log(req.query.id)
  con.query(`select * from inventario`, function (error, results,fields) {
  if (error) throw error;
    console.log(results);
    res.send(results);
  });
})


/** 
 * @swagger
 * /inventario:
 *  post:
 *   description: Hace un insert en un inventario
 *   responses:
 *    200:
 *     description: Esto permite insertar un registro en el inventario
 * 
*/
router.post('/inventario', (req, res) => {
  console.log(req.body)
  con.query(`insert into inventario (Descripcion,Precio,existencia_inicial,stock,vigente) 
		  values ('${req.body.descripcion}',
              ${req.body.precio},
              ${req.body.existencia},
              ${req.body.stock},
              ${req.body.vigente});`
      ,function (error, results,fields) {
  if (error) throw error;
    console.log(req.body);
    console.log("Objeto insertado con exito")
    res.send("Objeto insertado con exito");
  });
})


/** 
 * @swagger
 * /inventario:
 *  put:
 *   description: Actualiza un objeto en el inventario a traves de un json
 *   responses:
 *    200:
 *     description: Recibe un json para cambiar dicho registro en nuestra base de datos
 * 
*/
router.put('/inventario', (req, res) => {
  console.log(req.body)
  con.query(`update inventario set 
    descripcion="${req.body.descripcion}",
    precio=${req.body.precio},
    existencia_inicial=${req.body.existencia},
    stock=${req.body.stock},
    vigente=${req.body.vigente} 
  where id_producto=${req.body.id};`
  ,function (error, results,fields) {
  if (error) throw error;
    console.log(req.body);
    console.log("Objeto editado con exito")
    res.json(req.body);
  });
})


/** 
 * @swagger
 * /inventario:
 *  delete:
 *   description: Trae todo el inventario en jsons
 *   responses:
 *    200:
 *     description: Esto permite hacer una consulta a todo el inventario
 * 
*/
router.delete('/inventario', (req, res) => {
  console.log(req.query.id)
  con.query(`delete from inventario where ID_PRODUCTO=${req.query.id}`, function (error, results,fields) {
  if (error) throw error;
    console.log(results);
    console.log('Objeto eliminado con exito')
    res.send(results);
  });
})

module.exports.router=router;