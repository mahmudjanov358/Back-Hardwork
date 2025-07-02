const { Router } = require('express');
const stage = Router();

const {
  postStage,
  getStage,
  getStageById,
  updateStage,
  deleteStage,
} = require('../controllers/stage.controller');

stage.post('/postStage', postStage);
stage.get('/getStage', getStage);
stage.get('/getStageById/:id', getStageById);
stage.put('/updateStage/:id', updateStage);
stage.delete('/deleteStage/:id', deleteStage);

module.exports = { stage };