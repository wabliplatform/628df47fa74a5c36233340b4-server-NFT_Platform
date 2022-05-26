/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Nft } = require('../models/Nft');

/**
* Creates the data
*
* nft Nft data to be created
* returns nft
* */
const createnft = ({ nft }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Nft(nft).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* nftId String the Id parameter
* no response value expected for this operation
* */
const deletenft = ({ nftId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Nft.findOneAndDelete({ _id:nftId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllnft = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Nft.find().populate(['NFTCategory','UserNFTs']).exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* nftId String the Id parameter
* returns nft
* */
const getnft = ({ nftId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Nft.findById(nftId)
      .populate(['NFTCategory','UserNFTs']).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* nftId String the Id parameter
* nft Nft data to be updated (optional)
* returns nft
* */
const updatenft = ({ nftId, nft }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Nft.findOneAndUpdate({ _id:nftId },nft).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createnft,
  deletenft,
  getAllnft,
  getnft,
  updatenft,
};
