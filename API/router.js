const express=require('express')
let mysql = require('mysql');
const cors=require('cors')
const router = express.Router()


router.use(cors({origin:"http://localhost"}))
//Esto lo ocupa o si no empieza a quejarse que el CORS y zzzzzzzzzzzzz

// router.get('pasteleria/:id_producto',async(req,res)=>{
//   const DataID=req.params.id_producto;
//   console.log(DataID);
//   const [responseDB] =await pool.query(`select direccionfrom inventario where id_producto=${DataID};`);
//   res.json(responseDB);
// })


const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'panquesote7',
  database : 'garfield'
});

/** 
 * @swagger
 * /add:
 *  post:
 *   description: Agrega la direccion de una imagen a la base de datos
 *   responses:
 *    200:
 *     description: Esto permite agregar imagenes para su display
 * 
*/

router.post('/add', (req, res) => {
  console.log("Direccion a introducir: "+req.query.url)
  con.query(`insert into imageneshtml(direccion) values("${req.query.url}");`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Direccion de la imagen para html:\n "+req.query.url) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send("Direcccion agregada: "+req.query.url);
  });
})

/** 
 * @swagger
 * /put:
 *  put:
 *   description: Edita el registro de una direccion de una imagen a la base de datos
 *   responses:
 *    200:
 *     description: Esto permite editar la direccion de las imagenes en la base de datos
 * 
*/

router.put('/put', (req, res) => {
  console.log("Direccion a editar: "+req.query.url+"\nId del resgistro: "+req.query.id)
  con.query(`update imageneshtml set direccion="${req.query.url}" where id=${req.query.id};`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Direccion de la imagen para html:\n "+req.query.url) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send("Direcccion editada: "+req.query.url);
  });
})

/** 
 * @swagger
 * /del:
 *  delete:
 *   description: Elimina el registro de una direccion de una imagen a la base de datos
 *   responses:
 *    200:
 *     description: Esto permite eliminar la direccion de las imagenes en la base de datos
 * 
*/

router.delete('/del', (req, res) => {
  console.log("Id del resgistro a eliminar: "+req.query.id)
  con.query(`delete from imageneshtml where id=${req.query.id};`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Id de la imagen a eliminar:\n "+req.query.id) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send("Direcccion eliminada con exito");
  });
})


/** 
 * @swagger
 * /id/:id:
 *  get:
 *   description: Selecciona un objeto con un id escrito en la ruta
 *   responses:
 *    200:
 *     description: Esto permite traerte la imagen que se solicita
 * 
*/

router.get('/id/:id', (req, res) => {
  console.log("Id de nuestro objeto: "+req.params.id)
  con.query(`select direccion from imagenes where id=${req.params.id}`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Direccion de la imagen en la pc:\n "+Object.values(result[0])) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send(Object.values(result[0]));
  });
})

/** 
 * @swagger
 * /html/rand:
 *  get:
 *   description: Selecciona un objeto con un id escrito en la ruta, este metodo en particular consume el api en un html
 *   responses:
 *    200:
 *     description: Esto permite traerte la imagen que se solicita lista para un html
 * 
*/
router.get('/html/rand', (req, res) => {
  console.log("Imagen al azar de html")
  con.query(`select direccion from imageneshtml order by rand() limit 1;`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Direccion de nuestra\n imagen para html: "+Object.values(result[0])) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send(Object.values(result[0]));
  });
})


/** 
 * @swagger
 * /html/id/:id:
 *  get:
 *   description: Selecciona un objeto con un id escrito en la ruta, este metodo en particular consume el api en un html
 *   responses:
 *    200:
 *     description: Esto permite traerte la imagen que se solicita lista para un html
 * 
*/
router.get('/html/id/:id', (req, res) => {
  console.log("Id de nuestro objeto: "+req.params.id)
  con.query(`select direccion from imageneshtml where id=${req.params.id}`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Direccion de nuestra\n imagen para html: "+Object.values(result[0])) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send(Object.values(result[0]));
  });
})

/** 
 * @swagger
 * /html/70s:
 *  get:
 *   description: Trae una imagen al azar de la decada de los 70s para display en html 
 *   responses:
 *    200:
 *     description: Esto permite traerte la imagen que se solicita lista para un html
 * 
*/
router.get('/html/70s', (req, res) => {
  con.query(`select direccion from imageneshtml where direccion like "%1970s%" order by rand() limit 1;`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Direccion de nuestra\n imagen para html: "+Object.values(result[0])) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send(Object.values(result[0]));
  });
})

/** 
 * @swagger
 * /html/80s:
 *  get:
 *   description: Trae una imagen al azar de la decada de los 80s para display en html 
 *   responses:
 *    200:
 *     description: Esto permite traerte la imagen que se solicita lista para un html
 * 
*/
router.get('/html/80s', (req, res) => {
  con.query(`select direccion from imageneshtml where direccion like "%1980s%" order by rand() limit 1;`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Direccion de nuestra\n imagen para html: "+Object.values(result[0])) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send(Object.values(result[0]));
  });
})

/** 
 * @swagger
 * /html/90s:
 *  get:
 *   description: Trae una imagen al azar de la decada de los 90s para display en html 
 *   responses:
 *    200:
 *     description: Esto permite traerte la imagen que se solicita lista para un html
 * 
*/
router.get('/html/90s', (req, res) => {
  con.query(`select direccion from imageneshtml where direccion like "%1990s%" order by rand() limit 1;`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Direccion de nuestra\n imagen para html: "+Object.values(result[0])) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send(Object.values(result[0]));
  });
})

/** 
 * @swagger
 * /html/00s:
 *  get:
 *   description: Trae una imagen al azar de la decada de los 2000s para display en html 
 *   responses:
 *    200:
 *     description: Esto permite traerte la imagen que se solicita lista para un html
 * 
*/
router.get('/html/00s', (req, res) => {
  con.query(`select direccion from imageneshtml where direccion like "%2000s%" order by rand() limit 1;`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Direccion de nuestra\n imagen para html: "+Object.values(result[0])) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send(Object.values(result[0]));
  });
})

/** 
 * @swagger
 * /html/10s:
 *  get:
 *   description: Trae una imagen al azar de la decada de los 2010s para display en html 
 *   responses:
 *    200:
 *     description: Esto permite traerte la imagen que se solicita lista para un html
 * 
*/
router.get('/html/10s', (req, res) => {
  con.query(`select direccion from imageneshtml where direccion like "%2010s%" order by rand() limit 1;`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Direccion de nuestra\n imagen para html: "+Object.values(result[0])) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send(Object.values(result[0]));
  });
})

/** 
 * @swagger
 * /html/20s:
 *  get:
 *   description: Trae una imagen al azar de la decada de los 2020s para display en html 
 *   responses:
 *    200:
 *     description: Esto permite traerte la imagen que se solicita lista para un html
 * 
*/
router.get('/html/20s', (req, res) => {
  con.query(`select direccion from imageneshtml where direccion like "%2020s%" order by rand() limit 1;`, function (error, result,fields) {
  if (error) throw error;
  
    console.log("Direccion de nuestra\n imagen para html: "+Object.values(result[0])) //elemento se enviaba como array de jsons, con esto
                                        //extraemos los valores de nuestro elemento 0 del arreglo 
                                        //que en este caso es un json con la direccion de nuestra imagen 
    //console.log(result[0].RowDataPacket);
    res.send(Object.values(result[0]));
  });
})



module.exports.router=router;