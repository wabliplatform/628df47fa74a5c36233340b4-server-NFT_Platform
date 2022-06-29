
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorynftSchema = new Schema({
Underscoreid:String , 


titleCategoryNFT:String , 


NFTCategorydescription:String 



})

module.exports = {
  Categorynft : mongoose.model('categorynft', categorynftSchema),
}

