const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Use EJS - Ferramenta para renderizar o html=ejs
app.set("view engine", "ejs");

// Criar uma rota
app.get("/", function(req, res){
    res.render("pages/index");
})
app.use(express.static('public'));

// Rodar o servidor
app.listen(port, () => {
    console.info("Aplicação rodando em http://localhost:3000");
});