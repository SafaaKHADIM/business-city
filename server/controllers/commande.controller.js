const mongoose = require('mongoose');

const Commande = mongoose.model('Commande');





//____________________________________________CRUD___________________________________________________________
//___________________________________________________________________________________________________________
//CREATE
module.exports.addCommande = (req, res, next) => {
    var commande = new Commande();
    commande.idUser = req.body.idUser;
    commande.listproduct.idProduit = req.body.listproduct.idProduit;
    commande.listproduct.quantite = req.body.listproduct.quantite;
    commande.listproduct.date = req.body.listproduct.date;


    commande.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            // if (err.code == 11000)
            //     res.status(422).send(['Duplicate email adrress found.']);
            // else
                return next(err);
        }

    });
}
//___________________________________________________________________________________________________________
//READ
module.exports.readCommande = function (req, res) {
    Commande.findById(req.params.id, function (err, commande) {
        if (err) return next(err);
        res.send(commande);
    })
};
//___________________________________________________________________________________________________________
//Delete
module.exports.deleteCommande = function (req, res) {
    Commande.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
//___________________________________________________________________________________________________________
//UPDATE
module.exports.updateCommande = function (req, res) {
    Commande.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
//____________________________________________CRUD_END_______________________________________________________
//___________________________________________________________________________________________________________
