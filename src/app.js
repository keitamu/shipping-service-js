// src/app.js
const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send({ weightLB: 5 })
})


app.get('/products/:productId', (request, response) => {
  response.send({ weightLB: 50 })
})

let PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`ShippingService is listening on port ${PORT}`))
