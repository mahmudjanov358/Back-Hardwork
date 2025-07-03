const JOI = require("joi");

exports.postGroupStuffValidationSchema = JOI.object({
  group_id: JOI.string().required().messages({
    "string.base": "Guruh identifikatori qator boʻlishi kerak!",
    "string.empty": "Guruh identifikatori kiritilishi shart!",
  }),
  stuff_id: JOI.string().required().messages({
    "string.base": "Stuff ID qator boʻlishi kerak!",
    "string.empty": "Stuff ID kiritilishi shart!",
  }),
}); // ----postGroupStuffValidationSchema