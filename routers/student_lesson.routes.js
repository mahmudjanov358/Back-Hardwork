const { Router } = require('express');
const student_lesson = Router();

const {
  postStudent_Lesson,
  getStudent_Lesson,
  getStudent_LessonById,
  updateStudent_Lesson,
  deleteStudent_Lesson,
} = require('../controllers/student_lesson.controller');

student_lesson.post('/postStudent_Lesson', postStudent_Lesson);
student_lesson.get('/getStudent_Lesson', getStudent_Lesson);
student_lesson.get('/getStudent_LessonById/:id', getStudent_LessonById);
student_lesson.patch('/updateStudent_Lesson/:id', updateStudent_Lesson);
student_lesson.delete('/deleteStudent_Lesson/:id', deleteStudent_Lesson);

module.exports = { student_lesson };