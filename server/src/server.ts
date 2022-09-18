import express from 'express'

const app = express()

app.get('/hello', (request, response) => {
  response.json('Hello World!')
  console.log('Hello World!')
})

app.listen(3333, () => console.log('App listening on 3333...'))
