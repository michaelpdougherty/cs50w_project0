var express = require('express')
var app = express()

// link custom css and js 
app.use(express.static('public'));

// begin server
var server = app.listen(3000, function () {
	console.log('We have started on port 3000')
})

// init nunjucks
var nunjucks = require('nunjucks')
nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.get('/', function(req, res) {
	res.render('index.html')
})

app.get('/about', function (req, res) {
	res.render('about.html')
})

app.get('/contact', function (req, res) {
	res.render('contact.html')
})

app.get('/portfolio', function (req, res) {
	res.render('portfolio.html')
})
