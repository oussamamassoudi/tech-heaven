const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
 namePro: String,
 imgPro:String,
 category:String,
 price:Number,
 description:String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;