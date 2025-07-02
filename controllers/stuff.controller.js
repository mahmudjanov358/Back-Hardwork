const { Stuff } = require('../models/stuffSchema');

// ----postStuff
exports.postStuff = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      login,
      parol,
      is_active
    } = req.body;
    const newStuff = await Stuff({
      first_name,
      last_name,
      phone_number,
      login,
      parol,
      is_active,
    });
    await newStuff.save();
    return res.status(200).json({
      success: true,
      message: "Stuff created successfully!"
    });
  } catch (error) {
    console.error("Error Stuff created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getStuff
exports.getStuff = async (req, res) => {
  try {
    const stuffs = await Stuff.find({});
    return res.status(200).json({
      success: true,
      message: "Stuffs list!",
      stuffs: stuffs
    });
  } catch (error) {
    console.error("Error Stuffs list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getStuffById
exports.getStuffById = async (req, res) => {
  try {
    const stuffById = req.params.id;
    const stuff = await Stuff.findById(stuffById);

    if (!stuff) {
      return res.status(404).json({
        success: false,
        message: "Stuff not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stuff found!",
        stuff: stuff
      });
    };
  } catch (error) {
    console.error("Error is by ID Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----updateStuff
exports.updateStuff = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      phone_number,
      login,
      parol,
    } = req.body;
    const updatedStuff = await Stuff.findByIdAndUpdate(
      id, {
      first_name,
      last_name,
      phone_number,
      login,
      parol,
    }, { new: true },
    );

    if (!updatedStuff) {
      return res.status(404).json({
        success: false,
        message: "Stuff not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stuff updated successfully!"
      });
    };
  } catch (error) {
    console.error("Error updated Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deleteStuff
exports.deleteStuff = async (req, res) => {
  try {
    const stuffId = req.params.id;
    const deletedStuff = await Stuff.findByIdAndDelete(stuffId);

    if (!deletedStuff) {
      return res.status(404).json({
        success: false,
        message: "Stuff not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stuff deleted successfully!"
      });
    };
  } catch (error) {
    console.error("Error deleted Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};