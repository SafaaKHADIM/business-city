const mongoose = require('mongoose');

const Vendeur = mongoose.model('Vendeur');
//________________________________________CRUD_______________________________________________________________
//___________________________________________________________________________________________________________
//CREATE
module.exports.addVendeur = (req, res, next) => {
    var vendeur = new Vendeur();
    vendeur.codeActivation = req.body.codeActivation;
    vendeur.isActive = req.body.isActive;
    vendeur.cin = req.body.cin;
    vendeur.email = req.body.email;
    vendeur.save((err, doc) => {
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
module.exports.readVendeur = function (req, res) {
    Vendeur.findById(req.params.id, function (err, vendeur) {
        if (err) return next(err);
        res.send(vendeur);
    })
};
//___________________________________________________________________________________________________________
//Delete
module.exports.deleteVendeur = function (req, res) {
    Vendeur.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
//___________________________________________________________________________________________________________
//UPDATE
module.exports.updateVendeur = function (req, res) {
    Vendeur.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
//____________________________________________CRUD_END_______________________________________________________
//___________________________________________________________________________________________________________
module.exports.requesteVendeur = function (req, res) {
    User.update({cin : req.params.id} ,  {$set: req.body}, function (err) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
