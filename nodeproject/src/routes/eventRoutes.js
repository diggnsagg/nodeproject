var express = require('express');
var mongodb = require('mongodb').MongoClient;

var eventRouter = express.Router();

eventRouter.route('/')
    .get(function(req, res){
        
        
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');
            collection.find({}).toArray(function(error, results){
                res.render('events', { 
                    list: ['first event', '2nd event', '3rd event'],
                    nav: [  { Link: 'services'  , Text: 'Services' }, 
                            { Link: 'portfolio' , Text: 'Portfolio'}, 
                            { Link: 'about'     , Text: 'About'    }, 
                            { Link: 'team'      , Text: 'Team'     }, 
                            { Link: 'contact'   , Text: 'Contact'  },
                            { Link: 'events'    , Text: 'Events'  }
                            ],
                    events: results
                });  
            });
        });        
    })
    
eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        res.render('event', { 
            list: ['first event', '2nd event', '3rd event'],
            nav: [  { Link: 'services'  , Text: 'Services' }, 
                    { Link: 'portfolio' , Text: 'Portfolio'}, 
                    { Link: 'about'     , Text: 'About'    }, 
                    { Link: 'team'      , Text: 'Team'     }, 
                    { Link: 'contact'   , Text: 'Contact'  },
                    { Link: 'events'    , Text: 'Events'  }
                    ],
            events: eventData[id]
        });
    })    
    
module.exports = eventRouter;