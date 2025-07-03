const { Group_Stuff } = require('../models/group_stuffSchema');

// ----postGroup_Stuff
exports.postGroup_Stuff = async (req, res) => {
  try {
    const {
      group_id,
      stuff_id,
    } = req.body;
    const newGroup_Stuff = new Group_Stuff({
      group_id,
      stuff_id,
    });
    await newGroup_Stuff.save();
    return res.status(200).json({
      success: true,
      message: "Group_Stuff created successfully!"
    });
  } catch (error) {
    console.error("Error Group_Stuff created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getGroup_Stuff
exports.getGroup_Stuff = async (req, res) => {
  try {
    const group_stuffs = await Group_Stuff.find({});
    return res.status(200).json({
      success: true,
      message: "Group_Stuffs list!",
      group_stuffs: group_stuffs
    });
  } catch (error) {
    console.error("Error Group_Stuffs list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getGroup_StuffById
exports.getGroup_StuffById = async (req, res) => {
  try {
    const groupStuffId = req.params.id;
    const groupStuff = await Group_Stuff.findById(
      groupStuffId
    ).populate(
      'group_id stuff_id'
    );

    if (!groupStuff) {
      return res.status(404).json({
        success: false,
        message: "Group_Stuff not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Group_Stuff details!",
        groupStuff: groupStuff
      });
    }
  } catch (error) {
    console.error("Error is by ID Group_Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deleteGroup_Stuff
exports.deleteGroup_Stuff = async (req, res) => {
  try {
    const groupStuffId = req.params.id;
    const groupStuff = await Group_Stuff.findByIdAndDelete(groupStuffId);

    if (!groupStuff) {
      return res.status(404).json({
        success: false,
        message: "Group_Stuff not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Group_Stuff deleted successfully!"
      });
    }
  } catch (error) {
    console.error("Error deleted Group_Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};