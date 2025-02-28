const express = require('express');
const app = express();

app.use(express.json());

app.get('/preferencia', (req,res)=>{
    const data = {mensaje: "Endpoint de negociación de contenido correcto"};
    const accept = req.accepts(['json','xml', 'html']);

    if(accept === 'json') {
        res.json(data);
    } else if(accept === 'xml'){
        res.type('application/xml');
        res.send(`<mensaje>${data.mensaje}</mensaje>`);
    } else if(accept === 'html') {
        res.type('text/html');
        res.send(`<p>${data.mensaje}</p>`)
    } else {
        res.status(406).send("Not Acceptable")
    }
});

app.listen(3001, ()=>{
    console.log("servidor escuchando en el puerto 3001");
});