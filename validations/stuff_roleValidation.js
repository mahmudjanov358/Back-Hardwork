const JOI = require("joi");

exports.postStuff_RoleValidationSchema = JOI.object({
  stuff_id: JOI.string().required().messages({
    "string.base": "Stuff ID qator boʻlishi kerak!",
    "string.empty": "Stuff ID kiritilishi shart!",
  }),
  role_id: JOI.string().required().messages({
    "string.base": "Role ID qator boʻlishi kerak!",
    "string.empty": "Role ID kiritilishi shart!",
  }),
}); // ----postStuff_RoleValidationSchema