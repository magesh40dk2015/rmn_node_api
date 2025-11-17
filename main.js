import exprss from 'express'
const app = exprss()
const port = 3000
import movieRouter from './routes/movie.route.js'
import connectDB from './lib/mongoDB.js'
// Middleware to parse JSON bodies
app.use(exprss.json())
app.use(exprss.urlencoded({ extended: true }))

connectDB()
app.use('/movies', movieRouter)

app.get('/', (req, res) => {
  res.send('Node Server Runing')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
