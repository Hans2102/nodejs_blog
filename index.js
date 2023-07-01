const express = require('express')
const app = express()
const port = 3000

app.get('/trangchu', (req, res) => {
  const a = 2;
  res.send('Hello World!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})