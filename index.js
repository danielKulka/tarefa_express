const express = require("express");
const app = express();
const usuario = require(".//router/usuario.router");

const port = 3001;

app.use(express.json());

app.use("/usuario",usuario);

app.get("/", (req,res) =>{
  res.send("hello world");
})

app.get("/contato", (req,res) =>{
  res.send("nosso email: email@123.com");
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})