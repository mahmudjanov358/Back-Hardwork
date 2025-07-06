const { Payment } = require("../models/paymentSchema");

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
      message: "Payment muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Error Payment yaratish —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getPayment
exports.getPayment = async (req, res) => {
  try {
    const payments = await Payment.find({});
    return res.status(200).json({
      success: true,
      message: "Payments ro'yxati!",
      Payments: payments,
    });
  } catch (error) {
    console.error("Error Payments ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getPaymentById
exports.getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId).populate("students_id");

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment ma'lumotlari!",
        payment: payment,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----updatePayment
exports.updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { payment_last_date, payment_date, price, is_paid, total_attent } =
      req.body;
    const updatedPayment = await Payment.findByIdAndUpdate(
      id,
      {
        payment_last_date,
        payment_date,
        price,
        is_paid,
        total_attent,
      },
      { new: true }
    );

    if (!updatedPayment) {
      return res.status(404).json({
        success: false,
        message: "Payment topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment muvaffaqiyatli yangilandi!",
        updatedPayment: updatedPayment,
      });
    }
  } catch (error) {
    console.error("Error yangilangan Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deletePayment
exports.deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const deletedPayment = await Payment.findByIdAndDelete(paymentId);

    if (!deletedPayment) {
      return res.status(404).json({
        success: false,
        message: "Payment topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment muvaffaqiyatli o'chirildi!",
        deletedPayment: deletedPayment,
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
