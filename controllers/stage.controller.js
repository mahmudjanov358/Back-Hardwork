const { Stage } = require('../models/stageSchema');

// ----postStage
exports.postStage = async (req, res) => {
  try {
    const { stage } = req.body;
    const newStage = new Stage({
      stage,
    });
    await newStage.save();
    return res.status(200).json({
      success: true,
      message: "Stage created successfully!",
      stage: newStage
    });
  } catch (error) {
    console.error("Error Stage created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getStage
exports.getStage = async (req, res) => {
  try {
    const stages = await Stage.find({});
    return res.status(200).json({
      success: true,
      message: "Stages list!",
      stages: stages
    });
  } catch (error) {
    console.error("Error Stages list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getStageById
exports.getStageById = async (req, res) => {
  try {
    const stageId = req.params.id;
    const stage = await Stage.findById(stageId);

    if (!stage) {
      return res.status(404).json({
        success: false,
        message: "Stage not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stage found!",
        stage: stage
      });
    };
  } catch (error) {
    console.error("Error is by ID Stage — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----updateStage
exports.updateStage = async (req, res) => {
  try {
    const { id } = req.params;
    const { stage } = req.body;
    const updatedStage = await Stage.findByIdAndUpdate(
      id, {
      stage
    }, { new: true }
    );

    if (!updatedStage) {
      return res.status(404).json({
        success: false,
        message: "Stage not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stage updated successfully!",
        stage: updatedStage
      });
    }
  } catch (error) {
    console.error("Error updated Stage — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deleteStage
exports.deleteStage = async (req, res) => {
  try {
    const stageId = req.params.id;
    const stage = await Stage.findByIdAndDelete(stageId);

    if (!stage) {
      return res.status(404).json({
        success: false,
        message: "Stage not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stage deleted successfully!"
      });
    }
  } catch (error) {
    console.error("Error deleted Stage — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};