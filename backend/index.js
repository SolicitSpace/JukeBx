var express = require('express');
var app = express();
var morgan = require('morgan');
var mon = require('mongodb');
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


// configuration
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




// Api's
// GET: get's all employees records
app.get ("/getAllEmployees/:email/:password", function (req, res) {
   
    mongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
      
        var dbo = db.db("jukeboxdb");
        var query = {email:req.params.email, password:req.params.password};
        console.log(query)
        dbo.collection("employees").find(query).toArray(function(err, result) {
            if (err) throw err;
            // console.log(result);
            res.send(result);
            db.close();
        });
        
    });

});







var server = app.listen(8081, "127.0.0.1", function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port);
});