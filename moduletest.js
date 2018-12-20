//egen module til at vise vejret, "er ikke en del af opgaven."
//import
var vejret = require('./own_modules/vejr_module/vejret')
//gør brugt
vejret.ditvejr();

//import
//OPGAVE 9
var bitcoin = require('./own_modules/bitcointoEuro_module/bitcointoeur')

//gør brug
bitcoin.omregner();

//ekstra opgave til 9
//euro til dkk;
var omregnereutildkk = require('./own_modules/euroTodkk_module/omregneretd');

//gør brug
omregnereutildkk.omregner(bitcoin.omregner);
