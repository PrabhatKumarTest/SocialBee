const express = require('express')
const helmet = require('helmet');
const morgan = require('morgan');

// Connecting to MongoDB
const connectToMongo = require('./connectToMongo.js');
connectToMongo()// functiont to connect with MongoDB

//app satup
const app = express()
const port = 5000

// MiddleWares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

// Working with pages
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/user', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})