let chai     = require('chai');
let chaiHttp = require('chai-http'); 
const expect = require('chai').expect; 
chai.use(chaiHttp);
const url= 'http://localhost:8081';

// Encapsular en test dentro de la funcion describe() Y describirmos el test
// describe('Inserta un empleado: ',()=>{
//      it('deberia insertar in empleado', (done) => { // En la funcion it() lo que deberia hacer 
//            chai.request(url)
//                    .post('/empleado')
//                    .send({ nombre:"Enrique", apPaterno:"Pena", apriaterno:"Nieto", edad:50, sueldo:5000 }) 
//                    .end( function(err,res){
//                            expect(res).to.have.status(200);
//                            expect(res.text).to.be.a('string');
//                            done();
//                    });
//                 });
//             });


describe('Obten imagen al azar: ',()=>{
     it('Obtendra la direccion de una imagen al azar', (done) => { 
           chai.request(url)
                   .get('/html/rand')
                   .end( function(err,res){
                           expect(res).to.have.status(200); 
                           expect(res).to.be.a.json;
                           done();
                   });
                });
            });

describe('Obten imagen de los 70: ',()=>{
     it('Obtendra la direccion de una imagen al azar de los 70s', (done) => { 
           chai.request(url)
                   .get('/html/70s')
                   .end( function(err,res){
                           expect(res).to.have.status(200); 
                           expect(res).to.be.a.json;
                           done();
                   });
                });
            });

describe('Obten imagen de los 80: ',()=>{
     it('Obtendra la direccion de una imagen al azar de los 80s', (done) => { 
           chai.request(url)
                   .get('/html/80s')
                   .end( function(err,res){
                           expect(res).to.have.status(200); 
                           expect(res).to.be.a.json;
                           done();
                   });
                });
            });

describe('Obten imagen de los 90: ',()=>{
     it('Obtendra la direccion de una imagen al azar de los 90s', (done) => { 
           chai.request(url)
                   .get('/html/90s')
                   .end( function(err,res){
                           expect(res).to.have.status(200); 
                           expect(res).to.be.a.json;
                           done();
                   });
                });
            });

describe('Obten imagen de los 2000: ',()=>{
     it('Obtendra la direccion de una imagen al azar de los 2000', (done) => { 
           chai.request(url)
                   .get('/html/00s')
                   .end( function(err,res){
                           expect(res).to.have.status(200); 
                           expect(res).to.be.a.json;
                           done();
                   });
                });
            });

describe('Obten imagen de los 10: ',()=>{
     it('Obtendra la direccion de una imagen al azar de los 2010', (done) => { 
           chai.request(url)
                   .get('/html/10s')
                   .end( function(err,res){
                           expect(res).to.have.status(200); 
                           expect(res).to.be.a.json;
                           done();
                   });
                });
            });


describe('Obten imagen de los 20: ',()=>{
     it('Obtendra la direccion de una imagen al azar de los 2020s', (done) => { 
           chai.request(url)
                   .get('/html/20s')
                   .end( function(err,res){
                           expect(res).to.have.status(200); 
                           expect(res).to.be.a.json;
                           done();
                   });
                });
            });



