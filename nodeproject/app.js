var express = require('express');
var app = express();

var port = process.env.PORT;
var host = process.env.HOST;

var eventRouter = require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbRoutes');

app.use(express.static('public'));
// app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');



app.get('/', function(req, res){
    // res.send('Aloha World!');
    res.render('index', { 
        list: ['first val', '2nd val', '3rd val'],
        nav: [  { Link: 'services'  , Text: 'Services' }, 
                { Link: 'portfolio' , Text: 'Portfolio'}, 
                { Link: 'about'     , Text: 'About'    }, 
                { Link: 'team'      , Text: 'Team'     }, 
                { Link: 'contact'   , Text: 'Contact'  },
                { Link: 'events'    , Text: 'Events'  }
                ]
    });
});

app.use('/Events', eventRouter);
app.use('/Db', dbRouter);


app.get('/routing', function(req, res){
    res.send('Aloha Routing!');
});

app.listen(port, host, function(err){
    console.log('The server is running on port: ' + port);
});