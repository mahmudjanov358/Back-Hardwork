const JOI = require("joi");

exports.postStuff_RoleValidationSchema = JOI.object({
  stuff_id: JOI.string().required().messages({
    "string.base": "Stuff ID string turida bo‘lishi kerak!",
    "string.empty": "Stuff ID kiritilishi shart!",
    "any.required": "Stuff ID kiritilishi shart!",
  }),
  role_id: JOI.string().required().messages({
    "string.base": "Role ID string turida bo‘lishi kerak!",
    "string.empty": "Role ID kiritilishi shart!",
    "any.required": "Role ID kiritilishi shart!",
  }),
}); // ----postStuff_RoleValidationSchema
