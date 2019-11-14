const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


var likesSchema = new mongoose.Schema({

    idUser: {
        type: String,
    },
    date: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
    }

});

var dislikesSchema = new mongoose.Schema({

    idUser: {
        type: String,
    },
    date: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
    }

});


var produitSchema = new mongoose.Schema({

    designation: {
        type: String,
    },
    description: {
        type: String,
    },
    modelurl: {
        type: String,
    },
    quantite: {
        type: Number,
    },
    prix: {
        type: Number,
    },
    idVendeur: {
        type: String,
    },
    categorie: {
        type: String,
    },
    idBoutique: {
        type: String,
    },
    likes :[likesSchema],
    dislikes : [dislikesSchema]

});


const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit ;
