const { Lid_Status } = require('../models/lid_statusSchema');

// ----postStuff
exports.postStuff = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Stuff created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getStuff
exports.getStuff = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Stuffs list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getStuffById
exports.getStuffById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error is by ID Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----updateStuff
exports.updateStuff = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----deleteStuff
exports.deleteStuff = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}