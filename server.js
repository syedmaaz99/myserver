const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello my name is maaz')
})

app.get('/contact', (req, res) => {
  res.send('<h1>wellcome to contact page</h1>')
})
app.get('/home-page', (req, res) => {
  res.send('<h2>wellcome to Home page</h2>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})