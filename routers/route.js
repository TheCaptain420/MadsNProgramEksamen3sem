'use strict';

//exporter hele modulet, til nemt brug
module.exports = function (app) {
    var controller = require('../controller/controller');
    
    // Routes
    app.route('/hentdata')
        .get(controller.hent_data)
        //.post(controller.opret_kunde);


    //app.route('/hentdata').post(controller.hent_data_for_en);

};
