const { Student_Lesson } = require("../models/student_lessonSchema");

// ----postStudent_Lesson
exports.postStudent_Lesson = async (req, res) => {
  try {
    const { lesson_id, students_id, is_there, reason, be_paid } = req.body;
    const newStudentLesson = new Student_Lesson({
      lesson_id,
      students_id,
      is_there,
      reason,
      be_paid,
    });
    await newStudentLesson.save();
    return res.status(200).json({
      success: true,
      message: "Student_Lesson muvaffaqiyatli yaratildi!",
      student_lesson: newStudentLesson,
    });
  } catch (error) {
    console.error("Error Student_Lesson yaratish —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getStudent_Lesson
exports.getStudent_Lesson = async (req, res) => {
  try {
    const student_lessons = await Student_Lesson.find({});
    return res.status(200).json({
      success: true,
      message: "Student_Lessons ro'yxati!",
      student_lessons: student_lessons,
    });
  } catch (error) {
    console.error("Error Student_Lessons ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getStudent_LessonById
exports.getStudent_LessonById = async (req, res) => {
  try {
    const studentLessonId = req.params.id;
    const studentLesson = await Student_Lesson.findById(
      studentLessonId
    ).populate("lesson_id students_id");

    if (!studentLesson) {
      return res.status(404).json({
        success: false,
        message: "Student_Lesson topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student_Lesson ma'lumotlari!",
        student_lesson: studentLesson,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Student_Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----updateStudent_Lesson
exports.updateStudent_Lesson = async (req, res) => {
  try {
    const { id } = req.params;
    const { is_there, reason, be_paid } = req.body;
    const updatedStudentLesson = await Student_Lesson.findByIdAndUpdate(
      id,
      {
        is_there,
        reason,
        be_paid,
      },
      { new: true }
    );

    if (!updatedStudentLesson) {
      return res.status(404).json({
        success: false,
        message: "Student_Lesson topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student_Lesson muvaffaqiyatli yangilandi!",
        student_lesson: updatedStudentLesson,
      });
    }
  } catch (error) {
    console.error("Error yangilangan Student_Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteStudent_Lesson
exports.deleteStudent_Lesson = async (req, res) => {
  try {
    const studentLessonId = req.params.id;
    const deletedStudentLesson = await Student_Lesson.findByIdAndDelete(
      studentLessonId
    );

    if (!deletedStudentLesson) {
      return res.status(404).json({
        success: false,
        message: "Student_Lesson topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student_Lesson muvaffaqiyatli o'chirildi!",
        student_lesson: deletedStudentLesson,
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Student_Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
