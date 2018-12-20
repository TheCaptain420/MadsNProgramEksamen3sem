'use strict';

//exporter hele modulet, til nemt brug
module.exports = function (app) {
    var controller = require('../controller/controller');
    
    // Routes
    app.route('/api/hentdata')
        .get(controller.hent_data)

    app.route('/api/opretKonto').post(controller.opret_konto)

};
