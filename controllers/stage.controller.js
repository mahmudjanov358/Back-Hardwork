const { Stage } = require('../models/stageSchema');

// ----postStage
exports.postStage = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Stage created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getStage
exports.getStage = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Stages list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getStageById
exports.getStageById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error is by ID Stage — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----updateStage
exports.updateStage = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Stage — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----deleteStage
exports.deleteStage = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Stage — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}