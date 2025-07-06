const { Lid } = require("../models/lidSchema");

// ----postLid
exports.postLid = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      lid_stage_id,
      test_date,
      trial_lesson_date,
      trial_lesson_time,
      trial_lesson_group_id,
      lid_status_id,
      cancel_reason_id,
    } = req.body;

    const newLid = new Lid({
      first_name,
      last_name,
      phone_number,
      lid_stage_id,
      test_date,
      trial_lesson_date,
      trial_lesson_time,
      trial_lesson_group_id,
      lid_status_id,
      cancel_reason_id,
    });
    await newLid.save();
    return res.status(200).json({
      success: true,
      message: "Lid muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Error Lid yaratish —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getLid
exports.getLid = async (req, res) => {
  try {
    const lids = await Lid.find();
    return res.status(200).json({
      success: true,
      message: "Lids ro'yxati!",
      lids: lids,
    });
  } catch (error) {
    console.error("Error Lids ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getLidById
exports.getLidById = async (req, res) => {
  try {
    const lidId = req.params.id;
    const lid = await Lid.findById(lidId).populate(
      "lid_stage_id trial_lesson_group_id lid_status_id cancel_reason_id"
    );

    if (!lid) {
      return res.status(404).json({
        success: false,
        message: "Lid topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lid ma'lumotlari!",
        lid: lid,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Lid — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----updateLid
exports.updateLid = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      phone_number,
      test_date,
      trial_lesson_date,
      trial_lesson_time,
    } = req.body;
    const updatedLid = await Lid.findByIdAndUpdate(
      id,
      {
        first_name,
        last_name,
        phone_number,
        test_date,
        trial_lesson_date,
        trial_lesson_time,
      },
      { new: true }
    );

    if (!updatedLid) {
      return res.status(404).json({
        success: false,
        message: "Lid topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lid muvaffaqiyatli yangilandi!",
        updatedLid: updatedLid,
      });
    }
  } catch (error) {
    console.error("Error yangilangan Lid — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteLid
exports.deleteLid = async (req, res) => {
  try {
    const lidId = req.params.id;
    const deletedLid = await Lid.findByIdAndDelete(lidId);

    if (!deletedLid) {
      return res.status(404).json({
        success: false,
        message: "Lid topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lid muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Lid — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
