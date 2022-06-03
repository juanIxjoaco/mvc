const express = require ('express');
const app = express();
const path = require ('path')

app.listen (3000, ()=>{
    console.log ('Servidor funcionando')
});

app.use(express.static(path.join(__dirname, "./public")))

let rutaMain = require ('./routes/main.js');
app.use ('/', rutaMain);