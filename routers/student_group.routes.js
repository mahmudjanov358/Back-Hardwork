const { Router } = require('express');
const student_group = Router();

const {
  postStudent_Group,
  getStudent_Group,
  getStudent_GroupById,
  deleteStudent_Group,
} = require('../controllers/student_group.controller');

student_group.post('/postStudent_Group', postStudent_Group);
student_group.get('/getStudent_Group', getStudent_Group);
student_group.get('/getStudent_GroupById/:id', getStudent_GroupById);
student_group.delete('/deleteStudent_Group/:id', deleteStudent_Group);

module.exports = { student_group };