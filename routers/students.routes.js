const { Router } = require('express');
const students = Router();

const {
  postStudents,
  getStudents,
  getStudentsById,
  updateStudents,
  deleteStudents,
} = require('../controllers/students.controller');

const {
  postStudentsValidationSchema,
  updateStudentsValidationSchema,
} = require('../validations/studentsValidation');
const studentsValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res
      .status(400)
      .json({ message: validationResult.error.details[0].message });
  } else {
    next();
  }
};

students.post('/post',
  studentsValidation(postStudentsValidationSchema),
  postStudents);
students.get('/get', getStudents);
students.get('/getById/:id', getStudentsById);
students.patch('/update/:id',
  studentsValidation(updateStudentsValidationSchema),
  updateStudents);
students.delete('/delete/:id', deleteStudents);

module.exports = { students };