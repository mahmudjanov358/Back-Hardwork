const { Payment } = require('../models/paymentSchema');

// ----postPayment
exports.postPayment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Payment created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getPayment
exports.getPayment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error Payments list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getPaymentById
exports.getPaymentById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error is by ID Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----updatePayment
exports.updatePayment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deletePayment
exports.deletePayment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};