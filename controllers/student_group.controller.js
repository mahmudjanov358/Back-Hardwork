const { Student_Group } = require('../models/student_groupSchema');

// ----postStudent_Group
exports.postStudent_Group = async (req, res) => {
  try {
    const {
      students_id,
      group_id,
    } = req.body;
    const newStudentGroup = new Student_Group({
      students_id,
      group_id,
    });
    await newStudent_Group.save();
    return res.status(200).json({
      success: true,
      message: "Student_Group created successfully!",
      student_group: newStudentGroup
    });
  } catch (error) {
    console.error("Error Student_Group created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getStudent_Group
exports.getStudent_Group = async (req, res) => {
  try {
    const student_groups = await Student_Group.find({});
    return res.status(200).json({
      success: true,
      message: "Student_Groups list!",
      student_groups: student_groups
    });
  } catch (error) {
    console.error("Error Student_Groups list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getStudent_GroupById
exports.getStudent_GroupById = async (req, res) => {
  try {
    const studentGroupId = req.params.id;
    const studentGroup = await Student_Group.findById(
      studentGroupId
    ).populate('student_id group_id'
    );

    if (!studentGroup) {
      return res.status(404).json({
        success: false,
        message: "Student_Group not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student_Group details!",
        student_group: studentGroup
      });
    }
  } catch (error) {
    console.error("Error is by ID Student_Group — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deleteStudent_Group
exports.deleteStudent_Group = async (req, res) => {
  try {
    const studentGroupId = req.params.id;
    const deletedStudentGroup = await Student_Group.findByIdAndDelete(studentGroupId);

    if (!deletedStudentGroup) {
      return res.status(404).json({
        success: false,
        message: "Student_Group not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student_Group deleted successfully!"
      });
    }
  } catch (error) {
    console.error("Error deleted Student_Group — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};