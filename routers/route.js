'use strict';

//exporter hele modulet, til nemt brug
module.exports = function (app) {
    var controller = require('../controller/controller');
    
    // route til at hente data 
    app.route('/api/hentdata')
        .get(controller.hent_data)

        //route til at oprette en konto
    app.route('/api/opretKonto').post(controller.opret_konto)
    
    //route til at oprette trans
    app.route('/api/opretTrans').post(controller.lavTrans);

    //route til hent alle trans
    app.route('/api/henttrans').get(controller.hent_transfers);

    //route til delete konto
    app.route('/api/deletekonto').delete(controller.deletekonto);
};
