const e = require('cors');
const { Reason_Lid } = require('../models/reason_lidSchema');

// ----postReason_Lid
exports.postReason_Lid = async (req, res) => {
  try {
    const { reason_lid } = req.body;
    const newReason_Lid = new Reason_Lid({
      reason_lid
    });
    await newReason_Lid.save();
    return res.status(200).json({
      success: true,
      message: "Reason_Lid created successfully!",
    });
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
    const reason_Lids = await Reason_Lid.find({});
    return res.status(200).json({
      success: true,
      message: "Reason_Lids list!",
      reason_Lids: reason_Lids,
    });
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
    const reason_LidId = req.params.id;
    const reason_Lid = await Reason_Lid.findById(reason_LidId);

    if (!reason_Lid) {
      return res.status(404).json({
        success: false,
        message: "Reason_Lid not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Reason_Lid found!",
        reason_Lid: reason_Lid,
      });
    };
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
    const { id } = req.params;
    const { reason_lid } = req.body;
    const updatedReason_Lid = await Reason_Lid.findByIdAndUpdate(
      id, {
      reason_lid
    }, { new: true }
    );

    if (!updatedReason_Lid) {
      return res.status(404).json({
        success: false,
        message: "Reason_Lid not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Reason_Lid updated successfully!",
        updatedReason_Lid: updatedReason_Lid,
      });
    };
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
    const reason_LidId = req.params.id;
    const deletedReason_Lid = await Reason_Lid.findByIdAndDelete(reason_LidId);

    if (!deletedReason_Lid) {
      return res.status(404).json({
        success: false,
        message: "Reason_Lid not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Reason_Lid deleted successfully!",
      });
    };;
  } catch (error) {
    console.error("Error deleted Reason_Lid — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};