const { Router } = require('express');
const group = Router();

const {
  postGroup,
  getGroup,
  getGroupById,
  updateGroup,
  deleteGroup,
} = require('../controllers/group.controller');

group.post('/post', postGroup);
group.get('/get', getGroup);
group.get('/getById/:id', getGroupById);
group.patch('/update/:id', updateGroup);
group.delete('/delete/:id', deleteGroup);

module.exports = { group };