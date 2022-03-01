import 'dotenv/config'
import express from 'express'
const app = express()

import connectDB from './db/connect.js'

//middelware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

// app.listen(port, () => {
//   console.log(`Server is listening on post ${port}...`)
// })

const start = async () => {
  try {
    connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on post ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
