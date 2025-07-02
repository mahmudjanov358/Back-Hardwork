const { Reason_Lid } = require('../models/reason_lidSchema');

// ----postReason_Lid
exports.postReason_Lid = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Reason_Lid created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getReason_Lid
exports.getReason_Lid = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Reason_Lids list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getReason_LidById
exports.getReason_LidById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error is by ID Reason_Lid — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----updateReason_Lid
exports.updateReason_Lid = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Reason_Lid — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deleteReason_Lid
exports.deleteReason_Lid = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Reason_Lid — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};