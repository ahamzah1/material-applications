const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World! NOW Different </h1>')
})

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})