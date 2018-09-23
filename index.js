const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const fs = require('fs')
const port = 3000
const app = express()

app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
  
    console.log(`server is listening on ${port}`)
})

app.use('/images', express.static(__dirname + '/images'));
app.use('/js', express.static(__dirname + '/js'));
  
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/',(Request,Response)=>{
    Response.render('index',{
        data:[]
    });
})
app.get('/recipes',(Request,Response)=>{
    jsonData = fs.readFileSync("data.json");

    Response.render('recipes',{
        recipe:JSON.parse(jsonData)
    });
})
