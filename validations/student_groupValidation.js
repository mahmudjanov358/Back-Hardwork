const JOI = require("joi");

exports.postStudentGroupValidationSchema = JOI.object({
  students_id: JOI.string().required().messages({
    "string.base": "Talaba identifikatori qator boʻlishi kerak!",
    "string.empty": "Talaba identifikatori kiritilishi shart!",
  }),
  group_id: JOI.string().required().messages({
    "string.base": "Guruh identifikatori qator boʻlishi kerak!",
    "string.empty": "Guruh identifikatori kiritilishi shart!",
  }),
}); // ----postStudentGroupValidationSchema