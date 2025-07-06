const { Lid_Status } = require("../models/lid_statusSchema");

// ----postLid_Status
exports.postLid_Status = async (req, res) => {
  try {
    const { status } = req.body;
    const newLid_Status = new Lid_Status({
      status,
    });
    await newLid_Status.save();
    return res.status(200).json({
      success: true,
      message: "Lid_Status muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Error Lid_Status yaratish —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getLid_Status
exports.getLid_Status = async (req, res) => {
  try {
    const lid_Statuss = await Lid_Status.find({});
    return res.status(200).json({
      success: true,
      message: "Lid_Statuss ro'yxati!",
      lid_Statuss: lid_Statuss,
    });
  } catch (error) {
    console.error("Error Lid_Statuss ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getLid_StatusById
exports.getLid_StatusById = async (req, res) => {
  try {
    const lid_StatusId = req.params.id;
    const lid_Status = await Lid_Status.findById(lid_StatusId);

    if (!lid_Status) {
      return res.status(404).json({
        success: false,
        message: "Lid_Status topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lid_Status ma'lumotlari!",
        lid_Status: lid_Status,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Lid_Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----updateLid_Status
exports.updateLid_Status = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedLid_Status = await Lid_Status.findByIdAndUpdate(
      id,
      {
        status,
      },
      { new: true }
    );

    if (!updatedLid_Status) {
      return res.status(404).json({
        success: false,
        message: "Lid_Status topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lid_Status muvaffaqiyatli yangilandi!",
        updatedLid_Status: updatedLid_Status,
      });
    }
  } catch (error) {
    console.error("Error yangilangan Lid_Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteLid_Status
exports.deleteLid_Status = async (req, res) => {
  try {
    const lid_StatusId = req.params.id;
    const deletedLid_Status = await Lid_Status.findByIdAndDelete(lid_StatusId);

    if (!deletedLid_Status) {
      return res.status(404).json({
        success: false,
        message: "Lid_Status topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lid_Status muvaffaqiyatli o'chirildi!",
        deletedLid_Status: deletedLid_Status,
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Lid_Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
