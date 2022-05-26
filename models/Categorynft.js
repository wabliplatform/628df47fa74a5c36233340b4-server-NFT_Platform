
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorynftSchema = new Schema({
Underscoreid:String , 


titleCategoryNFT:String , 


NFTCategorydescription:String , 


NFTCategory:  
  {
    type: Schema.Types.ObjectId,
    ref:'categorynft'
  }

 



})

module.exports = {
  Categorynft : mongoose.model('categorynft', categorynftSchema),
}

