require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const ctrl = require('./controller')

const { CONNECTION_STRING, SERVER_PORT } = process.env

app.use(express.json())

app.get('/api/transactions', ctrl.getTransaction)
app.post('/api/transactions', ctrl.addTransaction)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    recjectUnauthorized: false
  }
})
  .then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT || 4041, () =>
      console.log(`|-----server running on port: ${SERVER_PORT}-----|`)
    )
  })
  .catch(err => console.log(`database connection err: ${err}`))
