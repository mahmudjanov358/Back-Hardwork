const { Lid_Status } = require('../models/lid_statusSchema');

// ----postLid_Status
exports.postLid_Status = async (req, res) => {
  try {
    const { status } = req.body;
    const newLid_Status = new Lid_Status({
      status
    });
    await newLid_Status.save();
    return res.status(200).json({
      success: true,
      message: "Lid_Status created successfully!"
    });
  } catch (error) {
    console.error("Error Lid_Status created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getLid_Status
exports.getLid_Status = async (req, res) => {
  try {
    const lid_Statuss = await Lid_Status.find({});
    return res.status(200).json({
      success: true,
      message: "Lid_Statuss list!",
      lid_Statuss: lid_Statuss
    });
  } catch (error) {
    console.error("Error Lid_Statuss list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getLid_StatusById
exports.getLid_StatusById = async (req, res) => {
  try {
    const lid_StatusId = req.params.id;
    const lid_Status = await Lid_Status.findById(lid_StatusId);

    if (!lid_Status) {
      return res.status(404).json({
        success: false,
        message: "Lid_Status not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lid_Status found!",
        lid_Status: lid_Status
      });
    };
  } catch (error) {
    console.error("Error is by ID Lid_Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----updateLid_Status
exports.updateLid_Status = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedLid_Status = await Lid_Status.findByIdAndUpdate(
      id, {
      status
    }, { new: true }
    );

    if (!updatedLid_Status) {
      return res.status(404).json({
        success: false,
        message: "Lid_Status not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lid_Status updated successfully!",
        updatedLid_Status: updatedLid_Status
      });
    };
  } catch (error) {
    console.error("Error updated Lid_Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deleteLid_Status
exports.deleteLid_Status = async (req, res) => {
  try {
    const lid_StatusId = req.params.id;
    const deletedLid_Status = await Lid_Status.findByIdAndDelete(lid_StatusId);

    if (!deletedLid_Status) {
      return res.status(404).json({
        success: false,
        message: "Lid_Status not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Lid_Status deleted successfully!",
        deletedLid_Status: deletedLid_Status
      });
    };
  } catch (error) {
    console.error("Error deleted Lid_Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};