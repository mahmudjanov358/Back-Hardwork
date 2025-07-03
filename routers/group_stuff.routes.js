const { Router } = require('express');
const group_stuff = Router();

const {
  postGroup_Stuff,
  getGroup_Stuff,
  getGroup_StuffById,
  deleteGroup_Stuff,
} = require('../controllers/group_stuff.controller');

group_stuff.post('/post', postGroup_Stuff);
group_stuff.get('/get', getGroup_Stuff);
group_stuff.get('/getById/:id', getGroup_StuffById);
group_stuff.delete('/delete/:id', deleteGroup_Stuff);

module.exports = { group_stuff };