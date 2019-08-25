const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


var commentaireSchema = new mongoose.Schema({
    idCommentaireprcedent: {
        type: String,
    },
    comment: {
        type: String,
    },
    idUser: {
        type: String,
    },
    idProduit: {
        type: String,
    }

});


const Commentaire = mongoose.model('Commentaire',commentaireSchema );

module.exports = Commentaire ;
