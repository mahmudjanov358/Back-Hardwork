const { Students } = require('../models/studentsSchema');

// ----postStudents
exports.postStudents = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Students created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getStudents
exports.getStudents = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Students list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getStudentsById
exports.getStudentsById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error is by ID Students — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----updateStudents
exports.updateStudents = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Students — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----deleteStudents
exports.deleteStudents = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Students — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}