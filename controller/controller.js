var mysql = require('mysql');

//get request
//metode til at hente data fra table 
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
        con.query("use programEksamen;", function (err, result) {
            if (err) throw err;
            console.log("connected to schema");
        });

        //Her fotæller jeg at den skal vise alle.
        con.query("select * from kontotable ORDER BY brugerID DESC;", function (err, result) {
            if (err) throw err;
            console.log("selected *");
            //her sender den en json fil, til ham der prøver at hente den . 
            res.send(result);
        });
    });

}



//POST request
//lav en post request til at oprette nye brugere

exports.opret_kunde = function(req,res){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234"
    }); 
    con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          con.query("use programEksamen;", function (err, result) {
              if (err) throw err;
              console.log("connected to schema");
            });
          
            //req.body.whatever
            con.query("insert into BecBankbrugere(brugertype,navn,brugerID,brugernavn,passwordet) values ('"+req.body.brugertype+"','"+req.body.navn+"',"+req.body.brugerID+",'"+req.body.brugernavn+"','"+req.body.passwordet+"'); ", function (err, result) {
              if (err) throw err;
              console.log("kundeopretttet *");
            res.send("Det virker, akak den kom igennem");
            });
          });
  
  
  }