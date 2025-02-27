const express = require('express');
const app = express();

app.use(express.json());

app.get('/preferencia', (req,res)=>{

});

app.listen(3001, ()=>{
    console.log("servidor escuchando en el puerto 3001");
});