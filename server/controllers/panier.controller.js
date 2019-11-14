const mongoose = require('mongoose');

const Panier = mongoose.model('Pannier');
//______________________________________________CRUD_________________________________________________________
//___________________________________________________________________________________________________________
//CREATE
module.exports.addPanier = (req, res, next) => {
    var pannier = new Panier();
    pannier.idUser = req.body.idUser;
    pannier.idProduit= req.body.idProduit;



    pannier.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            // if (err.code == 11000)
            //     res.status(422).send(['Duplicate email adrress found.']);
            // else
              res.send(err);
        }

    });
}
//___________________________________________________________________________________________________________
//READ
module.exports.readPanier = function (req, res) {
    Panier.findById(req.params.id, function (err, panier) {
      console.log(panier);
        if (err) res.send(err);
        res.send(panier);
    })
};
//___________________________________________________________________________________________________________
//Delete
module.exports.deletePanier = function (req, res) {
    Panier.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
//___________________________________________________________________________________________________________
//UPDATE
module.exports.updatePanier = function (req, res) {
    Panier.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
//____________________________________________CRUD_END_______________________________________________________
//___________________________________________________________________________________________________________



//READ
module.exports.readPanierbyUser = function (req, res) {
    Panier.find({idUser : req.params.id}, function (err, panier) {
        if (err)   res.send(err);
        res.send(panier);
    })
};
