const express = require('express')
const app = express()
const port = 3000
require('./db/mongoose')
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const methodOverride = require('method-override')


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use('/articles',articleRouter)

app.get('/', async (req, res) => {
    let articles = await Article.find().sort({createdAt: 'desc'})
  res.render('articles/index', { articles: articles })
})








app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
