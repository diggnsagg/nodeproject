var express = require('express');
var app = express();

var port = process.env.PORT;
var host = process.env.HOST;

app.use(express.static('public'));
// app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    // res.send('Aloha World!');
    res.render('index', { 
        list: ['first val', '2nd val', '3rd val'],
        nav: [  { Link: 'Services'  , Text: 'Services' }, 
                { Link: 'Portfolio' , Text: 'Portfolio'}, 
                { Link: 'About'     , Text: 'About'    }, 
                { Link: 'Team'      , Text: 'Team'     }, 
                { Link: 'Contact'   , Text: 'Contact'  }]
    });
});

app.get('/routing', function(req, res){
    res.send('Aloha Routing!');
});

app.listen(port, host, function(err){
    console.log('The server is running on port: ' + port);
});