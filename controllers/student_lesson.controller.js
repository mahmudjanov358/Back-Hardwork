const { Student_Lesson } = require('../models/student_lessonSchema');

// ----postStudent_Lesson
exports.postStudent_Lesson = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Student_Lesson created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getStudent_Lesson
exports.getStudent_Lesson = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Student_Lessons list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getStudent_LessonById
exports.getStudent_LessonById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error is by ID Student_Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----updateStudent_Lesson
exports.updateStudent_Lesson = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Student_Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----deleteStudent_Lesson
exports.deleteStudent_Lesson = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Student_Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}