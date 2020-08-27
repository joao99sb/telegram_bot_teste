var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const route = require('./routes')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
) // for parsing application/x-www-form-urlencoded

app.use(route)
//This is the route the API will call


// Finally, start our server
app.listen(3333, function() {
  console.log('Telegram app listening on port 3000!')
})
