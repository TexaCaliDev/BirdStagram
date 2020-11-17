const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const connection = require('./db/connection')
const AppRouter = require('./routes/AppRouter')
const PORT = process.env.PORT || 3004
const helmet = require('helmet')
// Initialize Middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
  // Initialize Middleware
  
app.get('/', (req, res) => res.send({
  msg: 'oh yea'
}))
app.use('/api', AppRouter)

app.listen(PORT, async () => {
  try {
    await connection
    console.log('Database connected')
    console.log(`App listening on port: ${PORT}`)
  } catch(error) {
    throw new Error(error)
  }
})

