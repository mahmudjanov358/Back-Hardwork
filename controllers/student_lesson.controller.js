const { Student_Lesson } = require('../models/student_lessonSchema');

// ----postStudent_Lesson
exports.postStudent_Lesson = async (req, res) => {
  try {
    const {
      lesson_id,
      student_id,
      is_there,
      reason,
      be_paid,
    } = req.body;
    const newStudentLesson = new Student_Lesson({
      lesson_id,
      student_id,
      is_there,
      reason,
      be_paid,
    });
    await newStudentLesson.save();
    return res.status(200).json({
      success: true,
      message: "Student_Lesson created successfully!",
      student_lesson: newStudentLesson
    });
  } catch (error) {
    console.error("Error Student_Lesson created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getStudent_Lesson
exports.getStudent_Lesson = async (req, res) => {
  try {
    const student_lessons = await Student_Lesson.find({});
    return res.status(200).json({
      success: true,
      message: "Student_Lessons list!",
      student_lessons: student_lessons
    });
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
    const studentLessonId = req.params.id;
    const studentLesson = await Student_Lesson.findById(
      studentLessonId
    ).populate('lesson_id student_id'
    );

    if (!studentLesson) {
      return res.status(404).json({
        success: false,
        message: "Student_Lesson not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student_Lesson details!",
        student_lesson: studentLesson
      });
    }
  } catch (error) {
    console.error("Error is by ID Student_Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----updateStudent_Lesson
exports.updateStudent_Lesson = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      is_there,
      reason,
      be_paid,
    } = req.body;
    const updatedStudentLesson = await Student_Lesson.findByIdAndUpdate(
      id, {
      is_there,
      reason,
      be_paid,
    }, { new: true }
    );

    if (!updatedStudentLesson) {
      return res.status(404).json({
        success: false,
        message: "Student_Lesson not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student_Lesson updated successfully!",
        student_lesson: updatedStudentLesson
      });
    }
  } catch (error) {
    console.error("Error updated Student_Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deleteStudent_Lesson
exports.deleteStudent_Lesson = async (req, res) => {
  try {
    const studentLessonId = req.params.id;
    const deletedStudentLesson = await Student_Lesson.findByIdAndDelete(studentLessonId);

    if (!deletedStudentLesson) {
      return res.status(404).json({
        success: false,
        message: "Student_Lesson not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Student_Lesson deleted successfully!",
        student_lesson: deletedStudentLesson
      });
    }
  } catch (error) {
    console.error("Error deleted Student_Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};