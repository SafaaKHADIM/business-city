const mongoose = require('mongoose');



var messageSchema = new mongoose.Schema({

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


const Message = mongoose.model('Message',messageSchema );

module.exports = Message ;
