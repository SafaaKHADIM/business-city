const mongoose = require('mongoose');

const Produit = mongoose.model('Produit');
//________________________________________________CRUD_______________________________________________________
//___________________________________________________________________________________________________________
//CREATE
module.exports.addProduit = (req, res, next) => {
    var produit = new Produit();


    produit.designation = req.body.designation;
    produit.description = req.body.description;
    produit.modelurl = req.body.modelurl;
    produit.quantite = req.body.quantite;
    produit.prix = req.body.prix;
    produit.idVendeur = req.body.idVendeur;
    produit.categorie = req.body.categorie;
    produit.idBoutique = req.body.idBoutique;
    // produit.likes.idUser = req.body.likes.idUser;
    // produit.likes.date = req.body.likes.date;
    // produit.dislikes.idUser = req.body.dislikes.idUser;
    // produit.dislikes.date = req.body.dislikes.date;
    produit.save((err, doc) => {
        if (err)
            res.send(err);
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
module.exports.readProduit = function (req, res) {
    Produit.findById(req.params.id, function (err, produit) {
        if (err) return res.send(err);
        res.send(produit);
    })
};
//___________________________________________________________________________________________________________
//Delete
module.exports.deleteProduit = function (req, res) {
    Produit.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
//___________________________________________________________________________________________________________
//UPDATE
module.exports.updateProduit = function (req, res) {
    Produit.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
//__________________________________________CRUD_END_________________________________________________________
//_____________________________________________  ____________________________________________________________
//__________________________________________        _________________________________________________________
//________________________________________           ________________________________________________________
//______________________________________               ______________________________________________________
//____________________________________                   ____________________________________________________
//______________________________________               ______________________________________________________
//________________________________________            _______________________________________________________
//_________________________________________         _________________________________________________________
//___________________________________________     ___________________________________________________________
//____________________________________________   ____________________________________________________________
//________________________________________OTHER FUNCTIONS____________________________________________________
//___________________________________________________________________________________________________________
//READ All PRODUCTS
module.exports.readallProduit = function (req, res) {
    Produit.find(function (err, produits) {
        if (err) return next(err);
        produits.map((produit) => {
          produit.modelurl = 'http://localhost:3000/'+produit.modelurl;
          console.log(produit.modelurl);
          return produit;
        })
        res.send(produits);
    })
};

//BUY A PRODUCT
module.exports.buyProduit = function (req, res) {
    Produit.findByIdAndUpdate( req.params.id  ,  {$inc: {'quantite': -1}}, function (err, product) {
        if (err) res.send(err);
        res.send('Udpated successfully!');
    });
};


//READ All  PRODUCTS THAT BELONG TO A SPECEFIC SALER
module.exports.readallProduituser = async function (req, res) {
    Produit.find({idVendeur : req.params.email},function (err, produit) {
        if (err) res.send(err);
        res.send(produit);
        // Produit.find({idVendeur : req.params.email}).then((products) => {
        //   res.json(products);
        // }).catch();
        // const products = await Produit.find({idVendeur : req.params.email});
        // res.json(products);

    })
};

//READ All  PRODUCTS THAT BELONG TO THE A SPECIFIC BOUTIQUE
module.exports.readallProduitbyboutique = function (req, res) {
    Produit.find({idBoutique : { $regex:  req.params.idBoutique}},function (err, produit) {
        if (err) res.send(err);
        res.send(produit);
    })
};


//READ All  PRODUCTS THAT BELONG TO THE A SPECIFIC CATEGORY
module.exports.readallProduitbycategorie = function (req, res) {
    Produit.find({categorie :{ $regex:  req.params.categorie}},function (err, produit) {
        if (err) res.send(err);
        res.send(produit);
    })
};



//READ All  PRODUCTS BY DESIGNATION
module.exports.readallProduitbydesignation = function (req, res) {
    Produit.find({designation :{ $regex: req.params.designation} },function (err, produit) {
        if (err) res.send(err);
        res.send(produit);
    })
};

//READ All  PRODUCTS BY DESIGNATION
module.exports.readallProduitbycondition= function (req, res) {
    Produit.find({  $or:[ {designation :{ $regex: req.params.designation}} ,{categorie :{ $regex: req.params.designation}},{idBoutique :{ $regex: req.params.designation}}   ] },function (err, produit) {
        if (err) res.send(err);
        res.send(produit);
    })
};



//READ All  PRODUCTS sorted  BY DESIGNATION
module.exports.Produitsortedbyname= function (req, res) {
  Produit.find().collation({locale:'en',strength: 2}).sort({designation:1}).then((products) => {
   res.send(products);
   }).catch();
  // const products = await Produit.find().collation({locale:'en',strength: 2}).sort({designation:1});
  //  res.send(products);
};

module.exports.readProduitbycondition= function (req, res) {
    Produit.findOne({  $or:[ {designation : req.params.designation} ,{idVendeur : req.params.idVendeur},{idBoutique : req.params.idBoutique}   ] },function (err, produit) {
        if (err) res.send(err);
        res.send(produit);
    })
};
