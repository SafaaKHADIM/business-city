const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


var produitsSchema = new mongoose.Schema({

    idProduit: {
        type: String,
    },
    quantite: {
        type: Number,
    }

});



var pannierSchema = new mongoose.Schema({

    idUser: {
        type: String,
    },
    idProduit: {
        type: String,
    }

});


const Pannier = mongoose.model('Pannier', pannierSchema);

module.exports = Pannier ;
