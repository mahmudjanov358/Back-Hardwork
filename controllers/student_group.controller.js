const { Student_Group } = require("../models/student_groupSchema");

// ----postStudent_Group
exports.postStudent_Group = async (req, res) => {
  try {
    const { students_id, group_id } = req.body;
    const newStudentGroup = new Student_Group({
      students_id,
      group_id,
    });
    await newStudentGroup.save();
    return res.status(200).json({
      success: true,
      message: "StudentGroup muvaffaqiyatli yaratildi!",
      student_group: newStudentGroup,
    });
  } catch (error) {
    console.error("Error Student_Group yaratish —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getStudent_Group
exports.getStudent_Group = async (req, res) => {
  try {
    const student_groups = await Student_Group.find({});
    return res.status(200).json({
      success: true,
      message: "Student_Groups ro'yxati!",
      student_groups: student_groups,
    });
  } catch (error) {
    console.error("Error Student_Groups ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getStudent_GroupById
exports.getStudent_GroupById = async (req, res) => {
  try {
    const studentGroupId = req.params.id;
    const studentGroup = await Student_Group.findById(studentGroupId).populate(
      "students_id group_id"
    );

    if (!studentGroup) {
      return res.status(404).json({
        success: false,
        message: "Student_Group topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student_Group ma'lumotlari!",
        student_group: studentGroup,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Student_Group — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteStudent_Group
exports.deleteStudent_Group = async (req, res) => {
  try {
    const studentGroupId = req.params.id;
    const deletedStudentGroup = await Student_Group.findByIdAndDelete(
      studentGroupId
    );

    if (!deletedStudentGroup) {
      return res.status(404).json({
        success: false,
        message: "Student_Group topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student_Group muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Student_Group — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
