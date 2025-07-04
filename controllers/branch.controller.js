const { Branch } = require('../models/branchSchema');

// ----postBranch
exports.postBranch = async (req, res) => {
  try {
    const {
      name,
      address,
      call_number,
    } = req.body;
    const newBranch = new Branch({
      name,
      address,
      call_number,
    });
    await newBranch.save();
    return res.status(200).json({
      success: true,
      message: "Branch created successfully!"
    });
  } catch (error) {
    console.error("Error Branch created —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getBranch
exports.getBranch = async (req, res) => {
  try {
    const branches = await Branch.find({});
    return res.status(200).json({
      success: true,
      message: "Branches list!",
      branches: branches
    });
  } catch (error) {
    console.error("Error Branches list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----getBranchById
exports.getBranchById = async (req, res) => {
  try {
    const branchId = req.params.id;
    const branch = await Branch.findById(branchId);

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Branch details!",
        branch: branch
      });
    }
  } catch (error) {
    console.error("Error is by ID Branch — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----updateBranch
exports.updateBranch = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, call_number } = req.body;
    const updatedBranch = await Branch.findByIdAndUpdate(id, {
      name,
      address,
      call_number
    }, { new: true });

    if (!updatedBranch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Branch updated successfully!",
        branch: updatedBranch
      });
    }
  } catch (error) {
    console.error("Error updated Branch — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};

// ----deleteBranch
exports.deleteBranch = async (req, res) => {
  try {
    const branchId = req.params.id;
    const deletedBranch = await Branch.findByIdAndDelete(branchId);

    if (!deletedBranch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found!"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Branch deleted successfully!"
      });
    }
  } catch (error) {
    console.error("Error deleted Branch — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  };
};