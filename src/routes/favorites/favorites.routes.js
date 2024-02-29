const { Router } = require('express');
const favoriteCtrl = require('../../controllers/favorites/favorites.controller');
const verifyFavoritess = require('../../middlewares/verifyFavorites');

const router = Router();

router.post('/add', [verifyFavoritess.checkDuplicateFavorites],  favoriteCtrl.add);
router.get('/getall', favoriteCtrl.get);
router.delete('/DeleteFavorite/:id', favoriteCtrl.DeleteFavorite);
module.exports = router;