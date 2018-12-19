//køre func, på get request
hentstandartTable();

//func til at hente hele standart table, fra get serveren, samt sætte det ind med jquery
function hentstandartTable() {
    //"overskriften"    
    var startappend = "<tr><th id='brugerid' >brugerID</th><th>kontonavn</th><th>kontonummer</th><th>indestaaende</th><th>rente</th></tr> "
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

                var brugerID = '<td class="klikker" id="' + obj[index].brugerID + '" onclick="sebruger(this.id)" >' + obj[index].brugerID + ' </td>'
                var kontonavn = '<td>' + obj[index].kontonavn + ' </td>'
                var kontonummer = '<td>' + obj[index].kontonummer + ' </td>'
                var indestaaende = '<td class="moneybobs">' + obj[index].indestaaende + ' </td>'
                var rente = '<td >' + obj[index].rente + ' </td>'

                var slut = '</tr>'

                var finallinje = start + brugerID + kontonavn + kontonummer + indestaaende + rente + slut;
                $('#liste').append($(finallinje));
            }


        }
    }
    //åbner den
    xmlhttp.open("GET", "http://localhost:8080/hentdata", true);
    //hvilke type headers det er (Behøves kun i POST  )
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //sender request
    xmlhttp.send();
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