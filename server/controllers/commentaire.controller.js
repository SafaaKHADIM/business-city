const mongoose = require('mongoose');

const Commentaire = mongoose.model('Commentaire');
//____________________________________________CRUD___________________________________________________________
//___________________________________________________________________________________________________________
//CREATE
module.exports.addCommentaire = (req, res, next) => {
    var commentaire = new Commentaire();
    commentaire.idCommentaireprcedent = req.body.idCommentaireprcedent;
    commentaire.comment = req.body.comment;
    commentaire.idUser = req.body.idUser;
    commentaire.idProduit = req.body.idProduit;


    commentaire.save((err, doc) => {
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
module.exports.readCommentaire = function (req, res) {
    Commentaire.findById(req.params.id, function (err, commentaire) {
        if (err) return next(err);
        res.send(commentaire);
    })
};
//___________________________________________________________________________________________________________
//Delete
module.exports.deleteCommentaire = function (req, res) {
    Commentaire.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
//___________________________________________________________________________________________________________
//UPDATE
module.exports.updateCommentaire = function (req, res) {
    Commentaire.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
//____________________________________________CRUD_END_______________________________________________________
//___________________________________________________________________________________________________________
