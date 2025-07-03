const { Router } = require('express');
const stage = Router();

const {
  postStage,
  getStage,
  getStageById,
  updateStage,
  deleteStage,
} = require('../controllers/stage.controller');

stage.post('/post', postStage);
stage.get('/get', getStage);
stage.get('/getById/:id', getStageById);
stage.put('/update/:id', updateStage);
stage.delete('/delete/:id', deleteStage);

module.exports = { stage };