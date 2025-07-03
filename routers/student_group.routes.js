const { Router } = require('express');
const student_group = Router();

const {
  postStudent_Group,
  getStudent_Group,
  getStudent_GroupById,
  deleteStudent_Group,
} = require('../controllers/student_group.controller');

student_group.post('/post', postStudent_Group);
student_group.get('/get', getStudent_Group);
student_group.get('/getById/:id', getStudent_GroupById);
student_group.delete('/delete/:id', deleteStudent_Group);

module.exports = { student_group };