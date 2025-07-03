const { Lesson } = require('../models/lessonSchema');

// ----postLesson
exports.postLesson = async (req, res) => {
  try {
    const {
      lesson_theme,
      lesson_number,
      group_id,
      lesson_date,
    } = req.body;
    const newLesson = new Lesson({
      lesson_theme,
      lesson_number,
      group_id,
      lesson_date,
    });
    await newLesson.save();
    return res.status(200).json({
      success: true,
      message: "Lesson created successfully!"
    });
  } catch (error) {
    console.error("Error Lesson created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getLesson
exports.getLesson = async (req, res) => {
  try {
    const lessons = await Lesson.find({});
    return res.status(200).json({
      success: true,
      message: "Lessons list!",
      lessons: lessons
    });
  } catch (error) {
    console.error("Error Lessons list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getLessonById
exports.getLessonById = async (req, res) => {
  try {
    const lessonId = req.params.id;
    const lesson = await Lesson.findById(
      lessonId
    ).populate(
      'group_id'
    );

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lesson found!",
        lesson: lesson
      });
    };
  } catch (error) {
    console.error("Error is by ID Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----updateLesson
exports.updateLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      lesson_theme,
      lesson_number,
      lesson_date,
    } = req.body;
    const updatedLesson = await Lesson.findByIdAndUpdate(
      id, {
      lesson_theme,
      lesson_number,
      lesson_date,
    }, { new: true }
    );

    if (!updatedLesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lesson updated successfully!",
        updatedLesson: updatedLesson
      });
    };
  } catch (error) {
    console.error("Error updated Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deleteLesson
exports.deleteLesson = async (req, res) => {
  try {
    const lessonId = req.params.id;
    const deleteLesson = await Lesson.findByIdAndDelete(lessonId);

    if (!deleteLesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lesson deleted successfully!"
      });
    };
  } catch (error) {
    console.error("Error deleted Lesson — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};