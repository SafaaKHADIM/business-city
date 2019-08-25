const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


var boutiqueSchema = new mongoose.Schema({
    marque: {
        type: String,
    },
    idUser: {
        type: String,
    }

});


const Boutique = mongoose.model('Boutique', boutiqueSchema);

module.exports = Boutique ;
