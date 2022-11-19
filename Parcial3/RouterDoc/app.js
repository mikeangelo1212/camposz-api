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


app.use(express.text())
app.use(express.json())
app.use(ruta.router)
app.use(cors({origin:"http://localhost"}))

// app.get('pasteleria/:id_producto',async(req,res)=>{
//   const DataID=req.params.id_producto;
//   console.log(DataID);
//   const [responseDB] =await pool.query(`select *from inventario where id_producto=${DataID};`);
//   res.json(responseDB);
// })


app.listen(8081,() => {
  console.log('Servidor express escuchando en proceso: 8081')
  console.log("Dirname: "+__dirname)
})