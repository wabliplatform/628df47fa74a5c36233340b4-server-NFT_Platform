
const { NftNFTimageSchema } =require('./NftNFTimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
Underscoreid:String , 


Username:String , 


userProfile:  
NftNFTimageSchema
 , 


BioUser:String , 




 UserNFTs: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'nft'
  }

]



})

module.exports = {
  User : mongoose.model('user', userSchema),
}

