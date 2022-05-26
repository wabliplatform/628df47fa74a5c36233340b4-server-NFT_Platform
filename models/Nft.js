
const { NftNFTimageSchema } =require('./NftNFTimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nftSchema = new Schema({
Underscoreid:String , 


NFTtitle:String , 


NFTimage:  
NftNFTimageSchema
 , 


NFTdescription:String , 


NFTCategory:  
  {
    type: Schema.Types.ObjectId,
    ref:'categorynft'
  }

 , 


NFTprice:Number , 




 UserNFTs: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'nft'
  }

]
, 

titleNFT:String 



})

module.exports = {
  Nft : mongoose.model('nft', nftSchema),
}

