const { Student_Group } = require('../models/student_groupSchema');

// ----postStudent_Group
exports.postStudent_Group = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Student_Group created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getStudent_Group
exports.getStudent_Group = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Student_Groups list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getStudent_GroupById
exports.getStudent_GroupById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error is by ID Student_Group — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----deleteStudent_Group
exports.deleteStudent_Group = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Student_Group — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}