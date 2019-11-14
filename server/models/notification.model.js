const mongoose = require('mongoose');



var notificationSchema = new mongoose.Schema({

    date: {
        type: Date,
    },
    idUser: {
        type: String,
    },
    idProduit: {
        type: String,
    },
    Produitdesignation: {
        type: String,
    },
    productowner: {
        type: String,
    }

});


const Notification = mongoose.model('Notification',notificationSchema );

module.exports = Notification ;
