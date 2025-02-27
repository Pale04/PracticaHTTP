const express = require('express');
const app = express();

app.use(express.json());

app.get('/cache', (req,res)=>{
    res.set({
        'Cache-control': 'public, max-age=30',
        'Expires': new Date(Date.now() + 30000).toUTCString(),
        'Pragma': 'no-cache'
    })
    res.json({mensaje: "Respuesta de control de cache disponible por 30 segundos"});
});

app.listen(3002, ()=>{
    console.log("servidor escuchando en el puerto 3002");
});