'use strict';

var express = require('express');
var routes = require('./js/routes/index.js');
var mongo = require('mongodb').MongoClient;//mongoClient()是可以使用类似connect方法的对象

var app = express();

mongo.connect('mongodb://localhost:27017/thick',function (err, dbs) {
    if(err){
        throw new Error('Datebase failed to connect!');
    }else{
        console.log('MongoDB successfully connected on port 27017');
    }

    var db = dbs.db('thick');

    app.use('/public', express.static(process.cwd() + '/public')); //app.use和express.static将/public绑定到了/public。现在当/public被引用的时候，node就知道文件的地方了。
    app.use('/controllers', express.static(process.cwd() + '/js/controllers'));

    routes(app, db);

    app.listen(3000,function () {
        console.log('Listening on port 3000...');
    });

});
