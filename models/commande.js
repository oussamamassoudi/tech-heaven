const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commandeSchema = new schema({
    iduser:String,
    nameuser:String,
    nameprod:String,
    imgprod:String,
    qte:Number,
    price:Number,
    date:String,
    status:String

});

const Commande = mongoose.model("Commande", commandeSchema);

module.exports = Commande;