//HUSK AT START MYSQL 
//sudo /etc/init.d/mysql start

//til at "åbne serveren"
var app = require('express')();
var http = require('http').Server(app);

//for at stoppe cors fejl, skal denne require bruges
var cors = require('cors')

//til json objekter
bodyParser = require('body-parser');


//HUSK AT BRUGE BODYPARSER TIL POST REQUEST.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var controller = require('./controller/controller');


//require mysql
var mysql = require('mysql');

//Her bruger man cors
app.use(cors())

//get request
app.get('/',function(req,res){
    res.sendFile(__dirname + '/frontend/konti.html');
})
app.get('/script',function(req,res){
    res.sendFile(__dirname + '/frontend/script.js');
})



/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
*/

//"åbner" til alle requestene, der ligger i routes/controller
var routes = require('./routers/route')
routes(app)

//åbner/starter serveren på port 8080
http.listen(8080, function(){
    console.log('listening on *:8080');
  });

