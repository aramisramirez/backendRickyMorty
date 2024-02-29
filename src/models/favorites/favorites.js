const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({

    id: Number,
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    image: String,
    url: String,
    created: Date,

}, {
    timestamps: true,
    versionkey: false
});


module.exports = mongoose.model('favorites', favoritesSchema);
