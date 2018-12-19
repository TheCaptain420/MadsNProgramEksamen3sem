
function findvejretforby(){

//url til api
var url = "http://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=b77ba11d469bf7daccd88b87048cafcd";
//mit id : b77ba11d469bf7daccd88b87048cafcd

//require http request
var xhr = require('xmlhttprequest').XMLHttpRequest
var xmlhttp = new xhr;

//Ved hver readystatechange den modtager, tester den om den er 4(har fået response) og at serveren siger ok(200)
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {


      //Laver hele JSON filen om til et object.  
      var myObj = JSON.parse(this.responseText);
      //printer temperaturen
      console.log("temp i kelvin: " +myObj.main.temp);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
}
exports.ditvejr = findvejretforby;
