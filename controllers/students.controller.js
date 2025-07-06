const { Students } = require("../models/studentsSchema");

// ----postStudents
exports.postStudents = async (req, res) => {
  try {
    const { lid_id, first_name, last_name, phone_number, bithday, gender } =
      req.body;
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
      message: "Student muvaffaqiyatli yaratildi!",
      student: newStudent,
    });
  } catch (error) {
    console.error("Error Students yaratish —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getStudents
exports.getStudents = async (req, res) => {
  try {
    const students = await Students.find({});
    return res.status(200).json({
      success: true,
      message: "Students ro'yxati!",
      students: students,
    });
  } catch (error) {
    console.error("Error Students ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getStudentsById
exports.getStudentsById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Students.findById(studentId).populate("lid_id");

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student ma'lumotlari!",
        student: student,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Students — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----updateStudents
exports.updateStudents = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, phone_number, bithday, gender } = req.body;
    const updatedStudent = await Students.findByIdAndUpdate(
      id,
      {
        first_name,
        last_name,
        phone_number,
        bithday,
        gender,
      },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student muvaffaqiyatli yangilandi!",
        student: updatedStudent,
      });
    }
  } catch (error) {
    console.error("Error yangilangan Students — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteStudents
exports.deleteStudents = async (req, res) => {
  try {
    const studentId = req.params.id;
    const deletedStudent = await Students.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student muvaffaqiyatli o'chirildi!",
        student: deletedStudent,
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Students — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
