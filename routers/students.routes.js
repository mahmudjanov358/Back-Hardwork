const { Router } = require('express');
const students = Router();

const {
  postStudents,
  getStudents,
  getStudentsById,
  updateStudents,
  deleteStudents,
} = require('../controllers/students.controller');

students.post('/postStudents', postStudents);
students.get('/getStudents', getStudents);
students.get('/getStudentsById/:id', getStudentsById);
students.put('/updateStudents/:id', updateStudents);
students.delete('/deleteStudents/:id', deleteStudents);

module.exports = { students };