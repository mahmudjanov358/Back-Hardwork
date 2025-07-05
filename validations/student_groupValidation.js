const JOI = require("joi");

exports.postStudentGroupValidationSchema = JOI.object({
  students_id: JOI.string().required().messages({
    "string.base": "Students ID string turida bo‘lishi kerak!",
    "string.empty": "Students ID kiritilishi shart!",
    "any.required": "Students ID kiritilishi shart!",
  }),
  group_id: JOI.string().required().messages({
    "string.base": "Group ID string turida bo‘lishi kerak!",
    "string.empty": "Group ID kiritilishi shart!",
    "any.required": "Group ID kiritilishi shart!",
  }),
});
