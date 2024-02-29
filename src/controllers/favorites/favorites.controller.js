const validator = require('validator');
const config = require('../../database/config');
const Favorites = require('../../models/favorites/favorites');
const favorites = require('../../models/favorites/favorites');


const add = async (req, res) => {
    // capture data 
    const { id, name, status, species, type, gender, image, url, created } = req.body;

    // array of validation
    const validate = [
        !validator.isEmpty(name),
        !validator.isEmpty(status),
        !validator.isEmpty(species),
        !validator.isEmpty(type),
        !validator.isEmpty(gender),
        !validator.isEmpty(image),
        !validator.isEmpty(url),
        !validator.isEmpty(created)
    ];
    // validate array data and if there is incorrect data return
    if (validate.every(v => v === true)) {
        // Create the object
        const newFavorite = new favorites({
            id, 
            name, 
            status, 
            species, 
            type, 
            gender, 
            image, 
            url, 
            created
        });

        const savedFavorite = await newFavorite.save();
        // // Response success

        res.status(200).json(savedFavorite);
    } else {
        // Return error
        res.status(400).json({ message: '¡Datos incorrectos!' });
    }
}


const get = async (req, res) => {

    try {
        let favorite = await favorites.find();
        if (!favorite.length) {
            res.status(400).json({message: 'No existen registros' });
            return 0;
        }
        return res.status(200).json({
            favorite
        });
    }
    catch (e) {
        return res.status(500).json({
            message: '¡Ocurrió un error!'
        });
    }
}


const DeleteFavorite = async (req, res) => {
    const id = req.params.id;

    try {
        const autUp = await favorites.findOneAndDelete({ _id: id });
        
        if (!autUp) {
            return res.status(404).json({ message: '¡El registro no existe!' });
        }

        return res.status(200).json({ message: '¡Registro eliminado correctamente!' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: '¡Ocurrió un error al eliminar el registro!' });
    }

}

module.exports = { add, get, DeleteFavorite }