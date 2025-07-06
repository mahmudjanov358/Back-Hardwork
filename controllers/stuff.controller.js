const { Stuff } = require("../models/stuffSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ----postStuff
exports.postStuff = async (req, res) => {
  try {
    const { first_name, last_name, phone_number, login, parol, is_active } =
      req.body;
    const existingStuff = await Stuff.findOne({ login });
    console.log(existingStuff);

    if (existingStuff) {
      return res.status(404).json({
        success: false,
        message: "Login band etilgan!",
      });
    } else {
      const hashParol = await bcrypt.hash(parol, 10);
      const newStuff = await Stuff({
        first_name,
        last_name,
        phone_number,
        login,
        parol: hashParol,
        is_active,
      });
      await newStuff.save();
      return res.status(200).json({
        success: true,
        message: "Stuff muvaffaqiyatli yaratildi!",
      });
    }
  } catch (error) {
    console.error("Error Stuff yaratish —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----loginStuff
exports.loginStuff = async (req, res) => {
  try {
    const { login, parol } = req.body;
    const loginName = await Stuff.findOne({ login });
    console.log(loginName);
    if (!loginName) {
      return res.status(404).json({
        success: false,
        message: "Login topilmadi!",
      });
    }

    const parolMatch = await bcrypt.compare(parol, loginName.parol);
    if (!parolMatch) {
      return res.status(401).json({
        success: false,
        message: "Login yoki parol xato!",
      });
    }

    const token = jwt.sign({ login: loginName.login }, "secret");
    return res.json({
      message: "Token",
      token: token,
    });
  } catch (error) {
    console.error("Error Stuff login —", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getStuff
exports.getStuff = async (req, res) => {
  try {
    const stuffs = await Stuff.find({});
    return res.status(200).json({
      success: true,
      message: "Stuffs ro'yxati!",
      stuffs: stuffs,
    });
  } catch (error) {
    console.error("Error Stuffs ro'yxati — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----getStuffById
exports.getStuffById = async (req, res) => {
  try {
    const stuffById = req.params.id;
    const stuff = await Stuff.findById(stuffById);

    if (!stuff) {
      return res.status(404).json({
        success: false,
        message: "Stuff topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stuff ma'lumotlari!",
        stuff: stuff,
      });
    }
  } catch (error) {
    console.error("Error ID bo'yicha Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----updateStuff
exports.updateStuff = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, phone_number, login, parol } = req.body;
    const updatedStuff = await Stuff.findByIdAndUpdate(
      id,
      {
        first_name,
        last_name,
        phone_number,
        login,
        parol,
      },
      { new: true }
    );

    if (!updatedStuff) {
      return res.status(404).json({
        success: false,
        message: "Stuff topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stuff muvaffaqiyatli yangilandi!",
      });
    }
  } catch (error) {
    console.error("Error yangilangan Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};

// ----deleteStuff
exports.deleteStuff = async (req, res) => {
  try {
    const stuffId = req.params.id;
    const deletedStuff = await Stuff.findByIdAndDelete(stuffId);

    if (!deletedStuff) {
      return res.status(404).json({
        success: false,
        message: "Stuff topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Stuff muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Error o'chirilgan Stuff — ", error);
    return res.status(500).json({
      success: false,
      message: "Xatolik yuz berdi!",
    });
  }
};
