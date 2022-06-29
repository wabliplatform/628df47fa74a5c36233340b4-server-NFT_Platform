/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Categorynft } = require('../models/Categorynft');

/**
* Creates the data
*
* categorynft Categorynft data to be created
* returns categorynft
* */
const createcategorynft = ({ categorynft }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Categorynft(categorynft).save();
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
* categorynftId String the Id parameter
* no response value expected for this operation
* */
const deletecategorynft = ({ categorynftId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Categorynft.findOneAndDelete({ _id:categorynftId }).exec();
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
const getAllcategorynft = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Categorynft.find().exec();
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
* categorynftId String the Id parameter
* returns categorynft
* */
const getcategorynft = ({ categorynftId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Categorynft.findById(categorynftId)
      .exec();
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
* categorynftId String the Id parameter
* categorynft Categorynft data to be updated (optional)
* returns categorynft
* */
const updatecategorynft = ({ categorynftId, categorynft }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Categorynft.findOneAndUpdate({ _id:categorynftId },categorynft).exec();
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
  createcategorynft,
  deletecategorynft,
  getAllcategorynft,
  getcategorynft,
  updatecategorynft,
};
