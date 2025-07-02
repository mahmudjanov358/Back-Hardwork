const { Router } = require('express');
const role = Router();

const {
  postRole,
  getRole,
  getRoleById,
  updateRole,
  deleteRole
} = require('../controllers/role.controller');

role.post('/postRole', postRole);
role.get('/getRole', getRole);
role.get('/getRoleById/:id', getRoleById);
role.put('/updateRole/:id', updateRole);
role.delete('/deleteRole/:id', deleteRole);

module.exports = { role };