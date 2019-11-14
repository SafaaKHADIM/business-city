const mongoose = require('mongoose');

const Admin = mongoose.model('Admin');

//____________________________________________CRUD___________________________________________________________
//___________________________________________________________________________________________________________
//CREATE
module.exports.addAdmin = (req, res, next) => {
    var admin = new Admin();
    admin.codeActivation = req.body.codeActivation;
    admin.save((err, doc) => {
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
module.exports.readAdmin = function (req, res) {
    Admin.findById(req.params.id, function (err, admin) {
        if (err) return next(err);
        res.send(admin);
    })
};
//___________________________________________________________________________________________________________
//Delete
module.exports.deleteAdmin = function (req, res) {
    Admin.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
//___________________________________________________________________________________________________________
//UPDATE
module.exports.updateAdmin = function (req, res) {
    Admin.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
//____________________________________________CRUD_END_______________________________________________________
//___________________________________________________________________________________________________________
