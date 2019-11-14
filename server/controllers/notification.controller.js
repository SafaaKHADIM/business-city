const mongoose = require('mongoose');

const Notification = mongoose.model('Notification');

//____________________________________________CRUD___________________________________________________________
//___________________________________________________________________________________________________________
//CREATE
module.exports.addNotification = (req, res, next) => {
    var notification = new Notification();
    notification.date = req.body.date;
    notification.idUser = req.body.idUser;
    notification.idProduit = req.body.idProduit;
    notification.Produitdesignation = req.body.Produitdesignation;
    notification.productowner = req.body.productowner;
    notification.save((err, doc) => {
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
module.exports.readNotification = function (req, res) {
    Notification.find({productowner : req.params.id}, function (err, notification) {
        if (err)   res.send(err);
        res.send(notification);
    })
};
//___________________________________________________________________________________________________________
//Delete
module.exports.deleteNotification = function (req, res) {
    Notification.findByIdAndRemove(req.params.id, function (err) {
        if (err)   res.send(err);
        res.send('Deleted successfully!');
    })
};
//___________________________________________________________________________________________________________
//UPDATE
module.exports.updateNotification = function (req, res) {
    Notification.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, notification) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
//____________________________________________CRUD_END_______________________________________________________
//___________________________________________________________________________________________________________
