const { Router } = require('express');
const students = Router();

const {
  postStudents,
  getStudents,
  getStudentsById,
  updateStudents,
  deleteStudents,
} = require('../controllers/students.controller');

students.post('/post', postStudents);
students.get('/get', getStudents);
students.get('/getById/:id', getStudentsById);
students.patch('/update/:id', updateStudents);
students.delete('/delete/:id', deleteStudents);

module.exports = { students };