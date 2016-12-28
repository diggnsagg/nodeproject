var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;


var eventData = [
    {
        name: 'Event 1',
        description: 'The first event',
        date: '1.1.2015'
    },
    {
        name: 'Event 2',
        description: 'The second event',
        date: '1.1.2016'
    },
    {
        name: 'Event 3',
        description: 'The third event',
        date: '1.1.2017'
    },
    {
        name: 'Event 4',
        description: 'The fourth event',
        date: '1.1.2018'
    }];


dbRouter.route('/AddEventData')
    .get(function(req, res){
    //   res.send('Succesful route test!');
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');
            collection.insertMany(eventData, function(err, results){
                res.send(results);
                db.close();
            });
        });
    });
    
module.exports = dbRouter;