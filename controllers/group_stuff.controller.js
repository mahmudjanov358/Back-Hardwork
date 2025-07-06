const { Group_Stuff } = require("../models/group_stuffSchema");

// ----postGroup_Stuff
exports.postGroup_Stuff = async (req, res) => {
  try {
    const { group_id, stuff_id } = req.body;
    const newGroup_Stuff = new Group_Stuff({
      group_id,
      stuff_id,
    });
    await newGroup_Stuff.save();
    return res.status(200).json({
      success: true,
      message: "Group_Stuff muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Error Group_Stuff yaratish —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getGroup_Stuff
exports.getGroup_Stuff = async (req, res) => {
  try {
    const group_stuffs = await Group_Stuff.find({});
    return res.status(200).json({
      success: true,
      message: "Group_Stuffs ro'yxati!",
      group_stuffs: group_stuffs,
    });
  } catch (error) {
    console.error("Error Group_Stuffs ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getGroup_StuffById
exports.getGroup_StuffById = async (req, res) => {
  try {
    const groupStuffId = req.params.id;
    const groupStuff = await Group_Stuff.findById(groupStuffId).populate(
      "group_id stuff_id"
    );

    if (!groupStuff) {
      return res.status(404).json({
        success: false,
        message: "Group_Stuff topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Group_Stuff ma'lumotlari!",
        groupStuff: groupStuff,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Group_Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteGroup_Stuff
exports.deleteGroup_Stuff = async (req, res) => {
  try {
    const groupStuffId = req.params.id;
    const groupStuff = await Group_Stuff.findByIdAndDelete(groupStuffId);

    if (!groupStuff) {
      return res.status(404).json({
        success: false,
        message: "Group_Stuff topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Group_Stuff muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Group_Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
