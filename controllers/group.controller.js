const { Group } = require("../models/groupSchema");

// ----postGroup
exports.postGroup = async (req, res) => {
  try {
    const {
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_id,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active,
    } = req.body;
    const newGroup = new Group({
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_id,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active,
    });
    await newGroup.save();
    return res.status(200).json({
      success: true,
      message: "Group muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Error Group yaratish —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getGroup
exports.getGroup = async (req, res) => {
  try {
    const groups = await Group.find({});
    return res.status(200).json({
      success: true,
      message: "Grouplar ro'yxati!",
      groups: groups,
    });
  } catch (error) {
    console.error("Error Grouplar ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getGroupById
exports.getGroupById = async (req, res) => {
  try {
    const groupId = req.params.id;
    const group = await Group.findById(groupId).populate(
      "group_stage_id branch_id"
    );
    if (!group) {
      return res.status(404).json({
        success: false,
        message: "Group topilmadi!",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Group ma'lumotlari!",
      group: group,
    });
  } catch (error) {
    console.error("Error ID bo'yicha Group — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----updateGroup
exports.updateGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      room_number,
      room_floor,
      lessons_quant,
      is_active,
    } = req.body;
    const updatedGroup = await Group.findByIdAndUpdate(
      id,
      {
        group_name,
        lesson_start_time,
        lesson_continuous,
        lesson_week_day,
        room_number,
        room_floor,
        lessons_quant,
        is_active,
      },
      { new: true }
    );

    if (!updatedGroup) {
      return res.status(404).json({
        success: false,
        message: "Group topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Group muvaffaqiyatli yangilandi!",
        group: updatedGroup,
      });
    }
  } catch (error) {
    console.error("Error yangilangan Group — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteGroup
exports.deleteGroup = async (req, res) => {
  try {
    const groupId = req.params.id;
    const deletedGroup = await Group.findByIdAndDelete(groupId);

    if (!deletedGroup) {
      return res.status(404).json({
        success: false,
        message: "Group topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Group muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Group — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
