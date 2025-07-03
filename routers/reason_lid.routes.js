const { Router } = require('express');
const reason_lid = Router();

const {
  postReason_Lid,
  getReason_Lid,
  getReason_LidById,
  updateReason_Lid,
  deleteReason_Lid,
} = require('../controllers/reason_lid.controller');

reason_lid.post('/post', postReason_Lid);
reason_lid.get('/get', getReason_Lid);
reason_lid.get('/getById/:id', getReason_LidById);
reason_lid.put('/update/:id', updateReason_Lid);
reason_lid.delete('/delete/:id', deleteReason_Lid);

module.exports = { reason_lid };