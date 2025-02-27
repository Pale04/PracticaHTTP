const express = require('express');
const app = express();
const crypto = require('crypto');

//Middleware para parsear JSON en la petición
app.use(express.json());

app.get('/etag', (req,res)=>{
    const content = {mensaje: "Este mensaje se ha modificado 1 veces"};
    const jsonString = JSON.stringify(content);
    const etag = crypto.createHash('md5').update(jsonString).digest('hex');
    if(req.header['if-none-match'] == etag) {
        return res.status(304).end();
    }
    res.set('Etag',etag);
    res.json(content);
})

app.listen(3003, ()=>{
    console.log("servidor escuchando en el puerto 3003");
})