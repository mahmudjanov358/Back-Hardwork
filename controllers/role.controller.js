const { Role } = require("../models/roleSchema");

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
      message: "Role muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Error Role yaratish — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getRole
exports.getRole = async (req, res) => {
  try {
    const roles = await Role.find({});
    return res.status(200).json({
      success: true,
      message: "Roles ro'yxati!",
      roles: roles,
    });
  } catch (error) {
    console.error("Error Roles ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getRoleById
exports.getRoleById = async (req, res) => {
  try {
    const roleId = req.params.id;
    const roleById = await Role.findById(roleId);
    if (!roleById) {
      return res.status(404).json({
        success: false,
        message: "Role topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Role ma'lumotlari!",
        role: roleById,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Role — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----updateRole
exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedRole = await Role.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    if (!updatedRole) {
      return res.status(404).json({
        success: false,
        message: "Role topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Role muvaffaqiyatli yangilandi!",
        updatedRole: updatedRole,
      });
    }
  } catch (error) {
    console.error("Error yangilangan Role — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteRole
exports.deleteRole = async (req, res) => {
  try {
    const roleId = req.params.id;
    const deleteRole = await Role.findByIdAndDelete(roleId);

    if (!deleteRole) {
      return res.status(404).json({
        success: false,
        message: "Role topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Role muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Role — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
