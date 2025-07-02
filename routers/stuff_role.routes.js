const { Router } = require('express');
const stuff_role = Router();

const {
  postStuff_Role,
  getStuff_Role,
  getStuff_RoleById,
  deleteStuff_Role,
} = require('../controllers/stuff_role.controller');

stuff_role.post('/postStuff_Role', postStuff_Role);
stuff_role.get('/getStuff_Role', getStuff_Role);
stuff_role.get('/getStuff_RoleById/:id', getStuff_RoleById);
stuff_role.delete('/deleteStuff_Role/:id', deleteStuff_Role);

module.exports = { stuff_role };