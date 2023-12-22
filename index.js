import express from 'express'
import path from 'path'
import {requestTime,logger} from './middlewares.js'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000

const app = express()

app.use(express.static(path.resolve(__dirname,'static')))

app.use(requestTime)

// app.use(logger)



app.set('view engine','ejs')
app.set('views',path.resolve(__dirname,'ejs'))


app.get('/', (req,res)=>{
  res.render('index',{title:'Main Page'})
})

// app.get('/',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'static','index.html'))
// })

// app.get('/download',(req,res)=>{
  
//   res.download(path.resolve(__dirname,'static','index.html'))
// })



app.listen(PORT,()=>{
  console.log(`Server has been started on port ${PORT}...`)
})

