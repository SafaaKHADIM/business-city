const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


var produitsSchema = new mongoose.Schema({

    idProduit: {
        type: String,
    },
    quantite: {
        type: Number,
    },
    date: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
    }
});



var commandeSchema = new mongoose.Schema({

    idUser: {
        type: String,
    },
    listproduct: [produitsSchema]

});


const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande ;
