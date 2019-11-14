const mongoose = require('mongoose');

const Boutique = mongoose.model('Boutique');




//_____________________________________________CRUD__________________________________________________________
//___________________________________________________________________________________________________________
//CREATE
module.exports.addBoutique = (req, res, next) => {
    var boutique = new Boutique();
    boutique.marque = req.body.marque;
    boutique.idUser = req.body.idUser;



    boutique.save((err, doc) => {
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
module.exports.readBoutique = function (req, res) {
    Boutique.findById(req.params.id, function (err, boutique) {
        if (err) return next(err);
        res.send(boutique);
    })
};
//___________________________________________________________________________________________________________
//Delete
module.exports.deleteBoutique = function (req, res) {
    Boutique.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
//___________________________________________________________________________________________________________
//UPDATE
module.exports.updateBoutique = function (req, res) {
    Boutique.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
//____________________________________________CRUD_END_______________________________________________________
//___________________________________________________________________________________________________________
