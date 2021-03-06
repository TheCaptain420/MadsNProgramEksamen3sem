//https://api.cryptonator.com/api/ticker/btc-eur


function bitcointoeur(bitcoin){

    var antalBitcoin = bitcoin;


    //url til api
    var url = "https://api.cryptonator.com/api/ticker/btc-eur"
    


    //require http request
    var xhr = require('xmlhttprequest').XMLHttpRequest
    var xmlhttp = new xhr;
    
    //Ved hver readystatechange den modtager, tester den om den er 4(har fået response) og at serveren siger ok(200)
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //Laver hele JSON filen om til et object.  
          var myObj = JSON.parse(this.responseText);
          //printer temperaturen
          console.log("nuværende bitcoin pris i euro: " +myObj.ticker.price);
        }
    };

    //åbner requesten
    xmlhttp.open("GET", url, true);
    //sender requesten
    xmlhttp.send();
    }
    //exporter den
    exports.omregner = bitcointoeur;
    