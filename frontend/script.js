document.getElementById("velkommentekst").innerHTML = "Hej du der, klokken var " + new Date().toLocaleTimeString() + " ved sidste opdatering;"


//køre func, på get request
hentstandartTable();

//func til at hente hele standart table, fra get serveren, samt sætte det ind med jquery
function hentstandartTable() {
    //"overskriften"    
    var startappend = "<tr><th>Ejer Navn</th><th>Cpr nummer</th><th id='brugerid' >personID</th><th>Type Coin</th><th>Kontonummer</th><th>saldo</th></tr> "
    //jquery til at appende
    $('#liste').append($(startappend));
    
    //denne brugers til at lave req med
    var xmlhttp = new XMLHttpRequest();
    
    //Ved hver readystatechange den modtager, tester den om den er 4(har fået response) og at serveren siger ok(200)
    //Se i bunden af doc, for hvilke state er hvad. 
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("virket")
            //printer response
            console.log("response" + this.response);
            //laver det om til object
            var obj = JSON.parse(this.response)

            //appender hvert object
            for (let index = 0; index < obj.length; index++) {
                var start = '<tr>';

                var EjerNavn = '<td>' + obj[index].navn + ' </td>'
                var cpr = '<td>' + obj[index].cprnr + ' </td>'
                var brugerID = '<td class="klikker" id="' + obj[index].personID + '" onclick="sebruger(this.id)" >' + obj[index].personID + ' </td>'
                var typecoin = '<td>' + obj[index].typecoin + ' </td>'
                var kontonummer = '<td>' + obj[index].kontonr + ' </td>'
                var saldo = '<td class="moneybobs">' + obj[index].saldo + ' </td>'

                var slut = '</tr>'

                var finallinje = start +EjerNavn + cpr+ brugerID + typecoin + kontonummer + saldo + slut;
                $('#liste').append($(finallinje));
            }


        }
    }
    //åbner den
    xmlhttp.open("GET", "http://localhost:8080/api/hentdata", true);
    //hvilke type headers det er (Behøves kun i POST  )
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //sender request
    xmlhttp.send();
}


//til søgning af navn
function hentKontiEfterNavn(){
    console.log("tsm")
}






/*

//find cookie
function findCookieBeskrivelse(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

*/



  //Den spørg hvilken state http request er i.
  //0 -	UNSENT -	Client has been created. open() not called yet.
  //1 -	OPENED -	open() has been called.
  //2 -	HEADERS_RECEIVED -	send() has been called, and headers and status are available.
  //3 -	LOADING -	Downloading; responseText holds partial data.
  //4 -	DONE -	The operation is complete.