const { Branch } = require("../models/branchSchema");

// ----postBranch
exports.postBranch = async (req, res) => {
  try {
    const { name, address, call_number } = req.body;
    const newBranch = new Branch({
      name,
      address,
      call_number,
    });
    await newBranch.save();
    return res.status(200).json({
      success: true,
      message: "Branch muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Error Branch yaratish — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getBranch
exports.getBranch = async (req, res) => {
  try {
    const branches = await Branch.find({});
    return res.status(200).json({
      success: true,
      message: "Branchlar ro'yxati!",
      branches: branches,
    });
  } catch (error) {
    console.error("Error Branchlar ro'yxati! — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getBranchById
exports.getBranchById = async (req, res) => {
  try {
    const branchId = req.params.id;
    const branch = await Branch.findById(branchId);

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Branch topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Branch ma'lumotlari!",
        branch: branch,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Branch — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----updateBranch
exports.updateBranch = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, call_number } = req.body;
    const updatedBranch = await Branch.findByIdAndUpdate(
      id,
      {
        name,
        address,
        call_number,
      },
      { new: true }
    );

    if (!updatedBranch) {
      return res.status(404).json({
        success: false,
        message: "Branch topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Branch muvaffaqiyatli yangilandi!",
        branch: updatedBranch,
      });
    }
  } catch (error) {
    console.error("Error yangilangan Branch — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteBranch
exports.deleteBranch = async (req, res) => {
  try {
    const branchId = req.params.id;
    const deletedBranch = await Branch.findByIdAndDelete(branchId);

    if (!deletedBranch) {
      return res.status(404).json({
        success: false,
        message: "Branch topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Branch muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Branch — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
