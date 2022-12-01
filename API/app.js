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

