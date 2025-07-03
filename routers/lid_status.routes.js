const { Router } = require('express');
const lid_status = Router();

const {
  postLid_Status,
  getLid_Status,
  getLid_StatusById,
  updateLid_Status,
  deleteLid_Status,
} = require('../controllers/lid_status.controller');

lid_status.post('/post', postLid_Status);
lid_status.get('/get', getLid_Status);
lid_status.get('/getById/:id', getLid_StatusById);
lid_status.put('/update/:id', updateLid_Status);
lid_status.delete('/delete/:id', deleteLid_Status);

module.exports = { lid_status };