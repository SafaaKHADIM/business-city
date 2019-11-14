const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var vendeurSchema = new mongoose.Schema({
    codeActivation: {
        type: String,

    },
    isActive: {
        type: String,

    },
    cin: {
        type: String,

    },
    email: {
        type: String,

    }

});


const Vendeur = mongoose.model('Vendeur', vendeurSchema);
module.exports= Vendeur ;
