const { Router } = require('express');
const branch = Router();

const {
  postBranch,
  getBranch,
  getBranchById,
  updateBranch,
  deleteBranch,
} = require('../controllers/branch.controller');

branch.post('/post', postBranch);
branch.get('/get', getBranch);
branch.get('/getById/:id', getBranchById);
branch.put('/update/:id', updateBranch);
branch.delete('/delete/:id', deleteBranch);

module.exports = { branch };