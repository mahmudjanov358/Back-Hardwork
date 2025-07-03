const { Router } = require('express');
const lid = Router();

const {
  postLid,
  getLid,
  getLidById,
  updateLid,
  deleteLid,
} = require('../controllers/lid.controller');

lid.post('/post', postLid);
lid.get('/get', getLid);
lid.get('/getById/:id', getLidById);
lid.patch('/update/:id', updateLid);
lid.delete('/delete/:id', deleteLid);

module.exports = { lid };