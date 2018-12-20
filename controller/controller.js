var mysql = require('mysql');

//get request
//metode til at hente data fra table kontotable
//OPGAVE 6
exports.hent_data = function (req, res) {
    //opretter connection til db
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234"
    });

    //på connection fortæller jeg at den skal gøre noget
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        //Bruge den rigtige DB
        con.query("use Cryptobank;", function (err, result) {
            if (err) throw err;
            console.log("connected to schema");
        });

        //Her fotæller jeg at den skal vise alle.
        con.query("select personID,typecoin,kontonr,saldo,navn,cprnr from kontotable INNER JOIN brugertable ON kontotable.personID = brugertable.uniktID;", function (err, result) {
            if (err) throw err;
            console.log("selected *");
            //her sender den en json fil, til ham der prøver at hente den . 
            res.send(result);
        });
    });

}



//POST request
//lav en post request til at oprette nye konti
//OPGAVE 7
exports.opret_konto = function(req,res){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234"
    }); 
    con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          con.query("use Cryptobank;", function (err, result) {
              if (err) throw err;
              console.log("connected to schema");
            });
          
            //req.body.whatever
            con.query("insert into kontotable values ("+req.body.personID+",'"+req.body.typecoin+"',"+req.body.kontonr+","+req.body.saldo+"); ", function (err, result) {
              if (err) throw err;
              console.log("konto oprettet *");
            res.send("konto oprettet");
            });
          });
  
  
  }

//POST til at oprette en ny transak
//Bliver ikke implementeret i hjemmeside, da front end vil tage for lang tid.
//men det virker i POSTMAN

exports.lavTrans = function(req,res){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234"
    }); 
    con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          con.query("use Cryptobank;", function (err, result) {
              if (err) throw err;
              console.log("connected to schema");
            });
          
            //req.body.whatever
            con.query("insert into transfertable (senderID,saldosendt,sforbelob,sefterbelob,modtagerID,mforbelob,mefterbelob,kurs,mtype,stype) values ("+req.body.senderID+","+req.body.saldosendt+","+req.body.sforbelob+","+req.body.sefterbelob+","+req.body.modtagerID+","+req.body.mforbelob+","+req.body.mefterbelob+","+req.body.kurs+",'"+req.body.mtype+"','"+req.body.stype+"');             ", function (err, result) {
              if (err) throw err;
              console.log("transferoprettet *");
            res.send("konto oprettet");
            });
          });
  
  
  }


  //Get alle transfers
  //Bliver ikke implementeret i hjemmeside, da front end vil tage for lang tid.
//men det virker i POSTMAN
  exports.hent_transfers = function(req,res){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234"
      }); 
      con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query("use Cryptobank;", function (err, result) {
                if (err) throw err;
                console.log("connected to schema");
              });
            
              //req.body.whatever
              con.query("Select * from transfertable;", function (err, result) {
                if (err) throw err;
                console.log("transfer hentet *");
              res.send(result);
              });
            });
    
    
    }