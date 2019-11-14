const express = require('express');
const router = express.Router();
var multer = require('multer');



//controllers
const ctrlAdmin= require('../controllers/admin.controller');
const ctrlBoutique= require('../controllers/boutique.controller');
const ctrlCommande = require('../controllers/commande.controller');
const ctrlCommentaire = require('../controllers/commentaire.controller');
const ctrlPanier = require('../controllers/panier.controller');
const ctrlProduit = require('../controllers/produit.controller');
const ctrlUser = require('../controllers/user.controller');
const ctrlVendeur = require('../controllers/vendeur.controller');
const ctrlMessage = require('../controllers/message.controller');
const ctrlNotification = require('../controllers/notification.controller');


///////////////////CRUD////////////////////////////////////////////
//create
router.post('/newAdmin', ctrlAdmin.addAdmin);
router.post('/newBoutique', ctrlBoutique.addBoutique);
router.post('/newCommande', ctrlCommande.addCommande);
router.post('/newCommentaire', ctrlCommentaire.addCommentaire);
router.post('/newPanier', ctrlPanier.addPanier);
router.post('/newProduit', ctrlProduit.addProduit);
router.post('/newUser', ctrlUser.addUser);
router.post('/newVendeur', ctrlVendeur.addVendeur);
router.post('/newMessage', ctrlMessage.addMessage);
router.post('/newNotification', ctrlNotification.addNotification);
//read
router.get('/:id/readAdmin', ctrlAdmin.readAdmin);
router.get('/:id/readBoutique', ctrlBoutique.readBoutique);
router.get('/:id/readCommande', ctrlCommande.readCommande);
router.get('/:id/readCommentaire', ctrlCommentaire.readCommentaire);
router.get('/:id/readPanier', ctrlPanier.readPanier);
router.get('/:id/readProduit', ctrlProduit.readProduit);
router.get('/:id/readUser', ctrlUser.readUser);
router.get('/:id/readVendeur', ctrlVendeur.readVendeur);
router.get('/:id/readMessage', ctrlMessage.readMessage);
router.get('/:id/readNotification', ctrlNotification.readNotification);
//update
router.put('/:id/updateAdmin', ctrlAdmin.updateAdmin);
router.put('/:id/updateBoutique', ctrlBoutique.updateBoutique);
router.put('/:id/updateCommande', ctrlCommande.updateCommande);
router.put('/:id/updateCommentaire', ctrlCommentaire.updateCommentaire);
router.put('/:id/updatePanier', ctrlPanier.updatePanier);
router.put('/:id/updateProduit', ctrlProduit.updateProduit);
router.put('/:id/updateUser', ctrlUser.updateUser);
router.put('/:id/updateVendeur', ctrlVendeur.updateVendeur);
router.put('/:id/updateVendeur', ctrlVendeur.updateVendeur);
router.put('/:id/updateNotification', ctrlNotification.updateNotification);
//delete
router.delete('/:id/deleteAdmin', ctrlAdmin.deleteAdmin);
router.delete('/:id/deleteBoutique', ctrlBoutique.deleteBoutique);
router.delete('/:id/deleteCommande', ctrlCommande.deleteCommande);
router.delete('/:id/deleteCommentaire', ctrlCommentaire.deleteCommentaire);
router.delete('/:id/deletePanier', ctrlPanier.deletePanier);
router.delete('/:id/deleteProduit', ctrlProduit.deleteProduit);
router.delete('/:id/deleteUser', ctrlUser.deleteUser);
router.delete('/:id/deleteVendeur', ctrlVendeur.deleteVendeur);
router.delete('/:id/deleteMessage', ctrlMessage.deleteMessage);
router.delete('/:id/deleteNotification', ctrlNotification.deleteNotification);
/////////////////////////////////////////////////////////////////////////////////




/////////////other functions/////////////////////////
//////read
router.put('/:email/requestVendeur',ctrlUser.requestVendeur);
router.put('/:email/approuverVendeur',ctrlUser.approuverVendeur);
router.get('/:email/findUser',ctrlUser.findUser);
router.get('/findrequests',ctrlUser.findrequests);
router.get('/readallProduit', ctrlProduit.readallProduit);
router.get('/:email/readallProduituser', ctrlProduit.readallProduituser);
router.get('/:idBoutique/readallProduitbyboutique', ctrlProduit.readallProduitbyboutique);
router.get('/:categorie/readallProduitbycategorie', ctrlProduit.readallProduitbycategorie);
router.get('/:designation/readallProduitbydesignation', ctrlProduit.readallProduitbydesignation);
router.get('/:designation/readallProduitbycondition', ctrlProduit.readallProduitbycondition);
router.get('/Produitsortedbyname', ctrlProduit.Produitsortedbyname);
router.get('/:id/readPanierbyUser', ctrlPanier.readPanierbyUser);
/////update
router.put('/:email/findUserandupdate',ctrlUser.updateUserbyemail);
router.put('/:id/buyProduit',ctrlProduit.buyProduit);













//upload files to the server using multer ;)
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now()+ '.jpg')
  }
});

var upload = multer({ storage: storage }).single('image');
router.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err ) {
      // A Multer error occurred when uploading.
    }
    console.log(req.file);
    res.setHeader('Content-Type', 'application/json');
    res.json(req.file);

    // Everything went fine.
  })
});





module.exports = router;
