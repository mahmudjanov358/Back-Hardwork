const JOI = require("joi");

exports.postGroupStuffValidationSchema = JOI.object({
  group_id: JOI.string().required().messages({
    "string.base": "Group ID string turida boʻlishi kerak!",
    "string.empty": "Group ID kiritilishi shart!",
    "any.required": "Group ID kiritilishi shart!",
  }),
  stuff_id: JOI.string().required().messages({
    "string.base": "Stuff ID string turida boʻlishi kerak!",
    "string.empty": "Stuff ID kiritilishi shart!",
    "any.required": "Stuff ID kiritilishi shart!",
  }),
});

exports.updateGroupStuffValidationSchema =
  exports.postGroupStuffValidationSchema.fork(
    Object.keys(exports.postGroupStuffValidationSchema.describe().keys),
    (schema) => schema.optional()
  );
