const { Stage } = require("../models/stageSchema");

// ----postStage
exports.postStage = async (req, res) => {
  try {
    const { name } = req.body;
    const newStage = new Stage({
      name,
    });
    await newStage.save();
    return res.status(200).json({
      success: true,
      message: "Stage muvaffaqiyatli yaratildi!",
      stage: newStage,
    });
  } catch (error) {
    console.error("Error Stage yaratish —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getStage
exports.getStage = async (req, res) => {
  try {
    const stages = await Stage.find({});
    return res.status(200).json({
      success: true,
      message: "Stages ro'yxati!",
      stages: stages,
    });
  } catch (error) {
    console.error("Error Stages ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getStageById
exports.getStageById = async (req, res) => {
  try {
    const stageId = req.params.id;
    const stage = await Stage.findById(stageId);

    if (!stage) {
      return res.status(404).json({
        success: false,
        message: "Stage topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stage ma'lumotlari!",
        stage: stage,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Stage — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----updateStage
exports.updateStage = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedStage = await Stage.findByIdAndUpdate(
      id,
      {
        name,
      },
      { new: true }
    );

    if (!updatedStage) {
      return res.status(404).json({
        success: false,
        message: "Stage topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stage muvaffaqiyatli yangilandi!",
        stage: updatedStage,
      });
    }
  } catch (error) {
    console.error("Error yangilangan Stage — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteStage
exports.deleteStage = async (req, res) => {
  try {
    const stageId = req.params.id;
    const stage = await Stage.findByIdAndDelete(stageId);

    if (!stage) {
      return res.status(404).json({
        success: false,
        message: "Stage topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stage muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Stage — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
