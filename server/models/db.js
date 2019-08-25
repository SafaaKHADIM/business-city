const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');
require('./admin.model');
require('./boutique.model');
require('./commande.model');
require('./commentaire.model');
require('./panier.model');
require('./produit.model');
require('./vendeur.model');
