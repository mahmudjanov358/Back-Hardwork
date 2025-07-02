const { Router } = require('express');
const stuff = Router();

const {
  postStuff,
  getStuff,
  getStuffById,
  updateStuff,
  deleteStuff,
} = require('../controllers/stuff.controller');

stuff.post('/postStuff', postStuff);
stuff.get('/getStuff', getStuff);
stuff.get('/getStuffById/:id', getStuffById);
stuff.put('/updateStuff/:id', updateStuff);
stuff.delete('/deleteStuff/:id', deleteStuff);

module.exports = { stuff };