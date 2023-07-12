const express = require('express')

const app = express()

app.use(express.json()) 

app.get('/:id/exp/:exp', (req, res) => {
    res.send(`hello ${req.body.name}`)
    }
)

app.listen(3000, () => console.log('Server ready'))