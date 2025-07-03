const { Students } = require('../models/studentsSchema');

// ----postStudents
exports.postStudents = async (req, res) => {
  try {
    const {
      lid_id,
      first_name,
      last_name,
      phone_number,
      bithday,
      gender,
    } = req.body;
    const newStudent = new Students({
      lid_id,
      first_name,
      last_name,
      phone_number,
      bithday,
      gender,
    });
    await newStudent.save();
    return res.status(200).json({
      success: true,
      message: "Student created successfully!",
      student: newStudent
    });
  } catch (error) {
    console.error("Error Students created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getStudents
exports.getStudents = async (req, res) => {
  try {
    const students = await Students.find({});
    return res.status(200).json({
      success: true,
      message: "Students list!",
      students: students
    });
  } catch (error) {
    console.error("Error Students list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getStudentsById
exports.getStudentsById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Students.findById(studentId).populate('lid_id');

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student found!",
        student: student
      });
    }
  } catch (error) {
    console.error("Error is by ID Students — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----updateStudents
exports.updateStudents = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      phone_number,
      bithday,
      gender
    } = req.body;
    const updatedStudent = await Students.findByIdAndUpdate(id, {
      first_name,
      last_name,
      phone_number,
      bithday,
      gender
    }, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student updated successfully!",
        student: updatedStudent
      });
    };
  } catch (error) {
    console.error("Error updated Students — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deleteStudents
exports.deleteStudents = async (req, res) => {
  try {
    const studentId = req.params.id;
    const deletedStudent = await Students.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student deleted successfully!",
        student: deletedStudent
      });
    }
  } catch (error) {
    console.error("Error deleted Students — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}