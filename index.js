const express = require('express')

const app = express()

app.use(express.json()) 

app.get('/:id/exp/:exp', (req, res) => {
    res.send(`hello ${req.body.name}`)
    }
)

app.get('/user/:id', (req, res) => {
    res.send(`hello ${req.params.id}`)
    }
)

app.listen(3000, () => console.log('Server ready'))