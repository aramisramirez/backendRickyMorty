const Favorites = require('../models/favorites/favorites');

const checkDuplicateFavorites = async (req, res, next) => {

    const favorite = await Favorites.findOne({ id: req.body.id});

    if (favorite) return res.status(400).json({ message: '¡Este registro ya existe!' });

    next();
}

module.exports = { checkDuplicateFavorites }