const mongoose = require('mongoose');

const Message = mongoose.model('Message');

//____________________________________________CRUD___________________________________________________________
//___________________________________________________________________________________________________________
//CREATE
module.exports.addMessage = (req, res, next) => {
    var message = new Message();
    message.date = req.body.date;
    message.idUser = req.body.idUser;
    message.idProduit = req.body.idProduit;
    message.Produitdesignation = req.body.Produitdesignation;
    message.productowner = req.body.productowner;
    message.save((err, doc) => {
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
module.exports.readMessage = function (req, res) {
    Message.find({productowner : req.params.id}, function (err, message) {
        if (err)   res.send(err);
        res.send(message);
    })
};
//___________________________________________________________________________________________________________
//Delete
module.exports.deleteMessage = function (req, res) {
    Message.findByIdAndRemove(req.params.id, function (err) {
        if (err)   res.send(err);
        res.send('Deleted successfully!');
    })
};
//___________________________________________________________________________________________________________
//UPDATE
module.exports.updateMessage = function (req, res) {
    Message.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, message) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
//____________________________________________CRUD_END_______________________________________________________
//___________________________________________________________________________________________________________
