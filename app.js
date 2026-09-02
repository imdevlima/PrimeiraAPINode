const express = require('express');

const app = express()

let ALUNOS = [
    {id: 1, nome: "Adryan", curso : "BD"},
    {id: 2, nome: "Bruno", curso : "CC"},
    {id: 3, nome: "Bruna", curso : "ADS"},
    {id: 4, nome: "Victoria", curso : "SI"},
];


app.get("/", (req, res) => {
})


app.get("/alunos", (req,res) => {
    res.status(200).json(ALUNOS);
})


const PORTA = 3000
app.listen(PORTA, ()=>{
    console.log(`Servidor rodando no http://localhost:${PORTA}`)
})

// http://localhost:3000/
// http://localhost:3000/alunos