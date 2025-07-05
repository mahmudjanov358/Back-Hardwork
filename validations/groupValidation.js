const JOI = require("joi");

exports.postGroupValidationSchema = JOI.object({
  group_name: JOI.string().min(3).max(50).required().messages({
    "string.base": "Group name string turida boʻlishi kerak!",
    "string.empty": "Group name kiritilishi shart!",
    "string.min": "Group name kamida 3 ta belgidan iborat bo'lishi kerak!",
    "string.max": "Group name eng ko'p 50 ta belgidan iborat bo'lishi kerak!",
    "any.required": "Group name kiritilishi shart!",
  }),
  lesson_start_time: JOI.string().required().messages({
    "string.base": "Lesson start time string turida boʻlishi kerak!",
    "string.empty": "Lesson start time kiritilishi shart!",
    "any.required": "Lesson start time kiritilishi shart!",
  }),
  lesson_continuous: JOI.string().required().messages({
    "string.base": "Lesson continuous string turida boʻlishi kerak!",
    "string.empty": "Lesson continuous kiritilishi shart!",
    "any.required": "Lesson continuous kiritilishi shart!",
  }),
  lesson_week_day: JOI.string().required().messages({
    "string.base": "Lesson week day string turida boʻlishi kerak!", // Xabar takrorlanishi tuzatildi
    "string.empty": "Lesson week day kiritilishi shart!",
    "any.required": "Lesson week day kiritilishi shart!",
  }),
  group_stage_id: JOI.string().required().messages({
    "string.base": "Group stage ID string turida boʻlishi kerak!",
    "string.empty": "Group stage ID kiritilishi shart!",
    "any.required": "Group stage ID kiritilishi shart!",
  }),
  room_number: JOI.number().required().messages({
    "number.base": "Room number number turida boʻlishi kerak!",
    "number.empty": "Room number kiritilishi shart!",
    "any.required": "Room number kiritilishi shart!",
  }),
  room_floor: JOI.number().integer().min(1).max(10).required().messages({
    "number.base": "Room floor number turida boʻlishi kerak!",
    "number.empty": "Room floor kiritilishi shart!",
    "number.min": "Room floor kamida 1 bo'lishi kerak!",
    "number.max": "Room floor eng ko'p 10 bo'lishi kerak!",
    "any.required": "Room floor kiritilishi shart!",
  }),
  branch_id: JOI.string().required().messages({
    "string.base": "Branch ID string turida boʻlishi kerak!",
    "string.empty": "Branch ID kiritilishi shart!",
    "any.required": "Branch ID kiritilishi shart!",
  }),
  lessons_quant: JOI.number().integer().min(1).max(100).required().messages({
    "number.base": "Lessons quantity number turida boʻlishi kerak!",
    "number.empty": "Lessons quantity kiritilishi shart!",
    "number.min": "Lessons quantity kamida 1 bo'lishi kerak!",
    "number.max": "Lessons quantity eng ko'p 100 bo'lishi kerak!",
    "any.required": "Lessons quantity kiritilishi shart!",
  }),
  is_active: JOI.boolean().required().messages({
    "boolean.base": "Is active boolean turida boʻlishi kerak!",
    "boolean.empty": "Is active kiritilishi shart!",
    "any.required": "Is active kiritilishi shart!",
  }),
});

exports.updateGroupValidationSchema = exports.postGroupValidationSchema.fork(
  Object.keys(exports.postGroupValidationSchema.describe().keys),
  (schema) => schema.optional()
);
