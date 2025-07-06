const { Lesson } = require("../models/lessonSchema");

// ----postLesson
exports.postLesson = async (req, res) => {
  try {
    const { lesson_theme, lesson_number, group_id, lesson_date } = req.body;
    const newLesson = new Lesson({
      lesson_theme,
      lesson_number,
      group_id,
      lesson_date,
    });
    await newLesson.save();
    return res.status(200).json({
      success: true,
      message: "Lesson muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Error Lesson yaratish —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getLesson
exports.getLesson = async (req, res) => {
  try {
    const lessons = await Lesson.find({});
    return res.status(200).json({
      success: true,
      message: "Darslar ro'yxati!",
      lessons: lessons,
    });
  } catch (error) {
    console.error("Error Darslar ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getLessonById
exports.getLessonById = async (req, res) => {
  try {
    const lessonId = req.params.id;
    const lesson = await Lesson.findById(lessonId).populate("group_id");

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Dars topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Dars ma'lumotlari!",
        lesson: lesson,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Dars — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----updateLesson
exports.updateLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const { lesson_theme, lesson_number, lesson_date } = req.body;
    const updatedLesson = await Lesson.findByIdAndUpdate(
      id,
      {
        lesson_theme,
        lesson_number,
        lesson_date,
      },
      { new: true }
    );

    if (!updatedLesson) {
      return res.status(404).json({
        success: false,
        message: "Dars topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Dars muvaffaqiyatli yangilandi!",
        updatedLesson: updatedLesson,
      });
    }
  } catch (error) {
    console.error("Error yangilangan Dars — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteLesson
exports.deleteLesson = async (req, res) => {
  try {
    const lessonId = req.params.id;
    const deleteLesson = await Lesson.findByIdAndDelete(lessonId);

    if (!deleteLesson) {
      return res.status(404).json({
        success: false,
        message: "Dars topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Dars muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Dars — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
