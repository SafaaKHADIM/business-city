const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.modifyinfo = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.adresse = req.body.adresse;
    user.password = req.body.password;

    user.tel = req.body.tel;
    //user.isActive = req.body.isActive;
    user.entreprise=req.body.entreprise;
    //user.photoprofile= req.body.photoprofile;
    //user.photocouverture = req.body.photocouverture;
    user.aboutme = req.body.aboutme;
    user.save((err, doc) => {
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
