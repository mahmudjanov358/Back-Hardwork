const { Role } = require('../models/roleSchema');

// ----postRole
exports.postRole = async (req, res) => {
  try {
    const { name } = req.body;
    const newRole = await Role({
      name,
    });
    await newRole.save();
    return res.status(200).json({
      success: true,
      message: "Role created successfully!"
    });
  } catch (error) {
    console.error("Error created Role — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----getRole
exports.getRole = async (req, res) => {
  try {
    const roles = await Role.find({});
    return res.status(200).json({
      success: true,
      message: "Roles list!",
      roles: roles
    });
  } catch (error) {
    console.error("Error Roles list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    })
  }
}

// ----getRoleById
exports.getRoleById = async (req, res) => {
  try {
    const roleId = req.params.id;
    const roleById = await Role.findById(roleId);
    if (!roleById) {
      return res.status(404).json({
        success: false,
        message: "Role not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Role found successfully!",
        role: roleById
      });
    }
  } catch (error) {
    console.error("Error Role is by ID — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----updateRole
exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedRole = await Role.findByIdAndUpdate(
      id, { name }, { new: true }
    );

    if (!updatedRole) {
      return res.status(404).json({
        success: false,
        message: "Role not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Role updated successfully!",
      });
    }
  } catch (error) {
    console.error("Error Role updated — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}

// ----deleteRole
exports.deleteRole = async (req, res) => {
  try {
    const roleId = req.params.id;
    const deleteRole = await Role.findByIdAndDelete(roleId);

    if (!deleteRole) {
      return res.status(404).json({
        success: false,
        message: "Role not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Role deleted successfully!"
      });
    }
  } catch (error) {
    console.error("Error Role deleted — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}