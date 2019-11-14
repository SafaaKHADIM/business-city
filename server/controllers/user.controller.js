const mongoose = require('mongoose');

const User = mongoose.model('User');
//________________________________________CRUD_______________________________________________________________
//___________________________________________________________________________________________________________
//create
module.exports.addUser = (req, res, next) => {
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
    user.isVendeur="false";
    user.isAdmin="false";

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
//___________________________________________________________________________________________________________
//READ
module.exports.readUser = function (req, res) {
    User.findbyId(req.params.id, function (err, user) {
        if (err) res.send(err);
        res.send(user);
    })
};


//___________________________________________________________________________________________________________
//Delete
module.exports.deleteUser = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
//___________________________________________________________________________________________________________
//UPDATE
module.exports.updateUser = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
//____________________________________________CRUD_END_______________________________________________________
//___________________________________________________________________________________________________________


//requestvendeur
module.exports.requestVendeur = function (req, res) {
    User.updateOne({email : req.params.email} ,  {isVendeur :'enAttente'}, function (err) {
        if (err) return res.send(err);
        res.send('Udpated successfully!');
    });
};

//approuvervendeur
module.exports.approuverVendeur = function (req, res) {
    User.updateOne({email : req.params.email} ,  {isVendeur :'true'}, function (err) {
        if (err) return res.send(err);
        res.send('Udpated successfully!');
    });
};
//findUser by email
module.exports.findUser = function (req, res) {
    User.findOne({email : req.params.email}, function (err, user) {
        if (err) res.send(err);;
        res.send(user);
    })
};
//findUser by email
module.exports.findrequests = function (req, res) {
    User.find({isVendeur : 'enAttente'}, function (err, user) {
        if (err) res.send(err);;
        res.send(user);
    })
};

//find by email and update
module.exports.updateUserbyemail = function (req, res) {
    User.updateOne({email : req.params.email}, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
