const express = require('express');
const app = express();

// Use EJS - Ferramenta para renderizar o html=ejs
app.set("view engine", "ejs");

// Criar uma rota
app.get("/", function(req, res){
    res.render("index");
})

// Rodar o servidor
app.listen(8080);
console.log("Rodando");