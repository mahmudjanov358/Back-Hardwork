const { Stuff_Role } = require('../models/stuff_roleSchema');

// ----postStuff_Role
exports.postStuff_Role = async (req, res) => {
  try {
    const {
      stuff_id,
      role_id,
    } = req.body;
    const newStuff_Role = await Stuff_Role({
      stuff_id,
      role_id,
    });
    await newStuff_Role.save();
    return res.status(200).json({
      success: true,
      message: "Stuff_Role created successfully!"
    });
  } catch (error) {
    console.error("Error Stuff_Role created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getStuff_Role
exports.getStuff_Role = async (req, res) => {
  try {
    const stuff_roles = await Stuff_Role.find({});
    return res.status(200).json({
      success: true,
      message: "Stuff_Roles list!",
      stuff_roles: stuff_roles
    });
  } catch (error) {
    console.error("Error Stuff_Roles list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getStuff_RoleById
exports.getStuff_RoleById = async (req, res) => {
  try {
    const stuff_roleId = req.params.id;
    const stuff_role = await Stuff_Role.findById(stuff_roleId).populate('stuff_id role_id');

    if (!stuff_role) {
      return res.status(404).json({
        success: false,
        message: "Stuff_Role not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stuff_Role found!",
        stuff_role: stuff_role
      });
    };
  } catch (error) {
    console.error("Error is by ID Stuff_Role — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deleteStuff_Role
exports.deleteStuff_Role = async (req, res) => {
  try {
    const stuff_roleId = req.params.id;
    const deletedStuff_Role = await Stuff_Role.findByIdAndDelete(stuff_roleId);

    if (!deletedStuff_Role) {
      return res.status(404).json({
        success: false,
        message: "Stuff_Role not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stuff_Role deleted successfully!"
      });
    }
  } catch (error) {
    console.error("Error deleted Stuff_Role — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
};