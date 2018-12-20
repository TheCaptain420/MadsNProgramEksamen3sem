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
              console.log("kundeopretttet *");
            res.send("konto oprettet");
            });
          });
  
  
  }