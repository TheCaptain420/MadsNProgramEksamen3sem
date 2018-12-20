'use strict';

//exporter hele modulet, til nemt brug
module.exports = function (app) {
    var controller = require('../controller/controller');
    
    // Routes
    app.route('/api/hentdata')
        .get(controller.hent_data)

    app.route('/api/opretKonto').post(controller.opret_konto)
    
    app.route('/api/opretTrans').post(controller.lavTrans);

/*
    app.route('/api/henttrans').get(controller.hent_transfers);
*/
    app.route('/api/deletekonto').delete(controller.deletekonto);
};
