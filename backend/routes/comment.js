const express = require('express');
const router = express.Router();

const commentCtrl=require('../controllers/comment');
//const pour le token
const auth = require('../middleware/auth');

//requete pour poster un nouvel objet avec multer pour les images
router.post('/',commentCtrl.createComment);

//requete pour ciblé et afficher un element grace a son id
router.get('/:postId',commentCtrl.getAllComments);

//requete pour les commentaire

//requete pour supprimer un objet existant
router.delete('/:id',commentCtrl.deleteComment );

module.exports = router; 