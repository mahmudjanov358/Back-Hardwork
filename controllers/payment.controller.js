const { Payment } = require('../models/paymentSchema');

// ----postPayment
exports.postPayment = async (req, res) => {
  try {
    const {
      students_id,
      payment_last_date,
      payment_date,
      price,
      is_paid,
      total_attent,
    } = req.body;
    const newPayment = new Payment({
      students_id,
      payment_last_date,
      payment_date,
      price,
      is_paid,
      total_attent,
    });
    await newPayment.save();
    return res.status(200).json({
      success: true,
      message: "Payment created successfully!",
    });
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
    const payments = await Payment.find({});
    return res.status(200).json({
      success: true,
      message: "Payments list!",
      Payments: payments,
    });
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
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId).populate('students_id');

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment found!",
        payment: payment,
      });
    };
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
    const { id } = req.params;
    const {
      payment_last_date,
      payment_date,
      price,
      is_paid,
      total_attent,
    } = req.body;
    const updatedPayment = await Payment.findByIdAndUpdate(
      id, {
      payment_last_date,
      payment_date,
      price,
      is_paid,
      total_attent,
    }, { new: true }
    );

    if (!updatedPayment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment updated successfully!",
        updatedPayment: updatedPayment,
      });
    };
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
    const paymentId = req.params.id;
    const deletedPayment = await Payment.findByIdAndDelete(paymentId);

    if (!deletedPayment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment deleted successfully!",
        deletedPayment: deletedPayment,
      });
    };
  } catch (error) {
    console.error("Error deleted Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};