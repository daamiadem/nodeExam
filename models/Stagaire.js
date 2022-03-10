const mongoose = require('mongoose'); 
Schema = mongoose.Schema ; 
var Stagiaire = new Schema ({
    cin : Number,
    nom : String,
    prenom : String,
    sexe : String,
    email : String,
    telephone : Number,
    option : String
}); 

module.exports = mongoose.model('stagiaire', Stagiaire);

