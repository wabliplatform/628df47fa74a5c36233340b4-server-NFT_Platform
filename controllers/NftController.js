/**
 * The NftController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NftService');
const createnft = async (request, response) => {
  await Controller.handleRequest(request, response, service.createnft);
};

const deletenft = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletenft);
};

const getAllnft = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllnft);
};

const getnft = async (request, response) => {
  await Controller.handleRequest(request, response, service.getnft);
};

const updatenft = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatenft);
};


module.exports = {
  createnft,
  deletenft,
  getAllnft,
  getnft,
  updatenft,
};
