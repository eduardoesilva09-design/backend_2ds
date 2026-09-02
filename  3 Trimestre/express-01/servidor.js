// importação moderna com ESM (import)
import express from 'express'

const app = express() //Instanciar Express

app.get('/', (req, res) => {
    res.send(`<h3>Página Inicial</h3>\n
              <p>Loja especializada em roupas de Rock</p>`)
})
app.get('/roupas de rock', (req, res) => {
    res.send('Home Ok!')
})

app.listen(3000, ()=> {console.log('Servidor está vivo!')})
