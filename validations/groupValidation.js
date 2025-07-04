const JOI = require("joi");

exports.postGroupValidationSchema = JOI.object({
  group_name: JOI.string().min(3).max(50).required().messages({
    "string.base": "Guruh nomi qator boʻlishi kerak!",
    "string.empty": "Guruh nomi kiritilishi shart!",
    "string.min": "Guruh nomi kamida 3 ta belgidan iborat bo'lishi kerak!",
    "string.max": "Guruh nomi eng ko'p 50 ta belgidan iborat bo'lishi kerak!",
  }),
  lesson_start_time: JOI.string().required().messages({
    "string.base": "Dars boshlanishi vaqti qator boʻlishi kerak!",
    "string.empty": "Dars boshlanishi vaqti kiritilishi shart!",
  }),
  lesson_continuous: JOI.string().required().messages({
    "string.base": "Dars davomiyligi qator boʻlishi kerak!",
    "string.empty": "Dars davomiyligi kiritilishi shart!",
  }),
  lesson_week_day: JOI.string().required().messages({
    "string.base": "Dars haftasi qator kiritilishi kerak!",
    "string.base": "Dars haftasi kiritilishi shart!",
  }),
  group_stage_id: JOI.string().required().messages({
    "string.base": "Group stage ID qator boʻlishi kerak!",
    "string.empty": "Group stage ID kiritilishi shart!",
  }),
  room_number: JOI.number().required().messages({
    "string.base": "Room number son boʻlishi kerak!",
    "string.empty": "Room number kiritilishi shart!",
  }),
  room_floor: JOI.number().integer().min(1).max(10).required().messages({
    "number.base": "Room floor son boʻlishi kerak!",
    "number.empty": "Room floor kiritilishi shart!",
    "number.min": "Room floor kamida 1 bo'lishi kerak!",
    "number.max": "Room floor eng ko'p 10 bo'lishi kerak!",
  }),
  branch_id: JOI.string().required().messages({
    "string.base": "Branch ID qator boʻlishi kerak!",
    "string.empty": "Branch ID kiritilishi shart!",
  }),
  lessons_quant: JOI.number().integer().min(1).max(100).required().messages({
    "number.base": "Lesson quantity son boʻlishi kerak!",
    "number.empty": "Lesson quantity kiritilishi shart!",
    "number.min": "Lesson quantity kamida 1 bo'lishi kerak!",
    "number.max": "Lesson quantity eng ko'p 100 bo'lishi kerak!",
  }),
  is_active: JOI.boolean().required().messages({
    "boolean.base": "Is active boolean boʻlishi kerak!",
    "boolean.empty": "Is active kiritilishi shart!",
  }),
}); // ----postGroupValidationSchema

exports.updateGroupValidationSchema = exports.postGroupValidationSchema.fork(
  Object.keys(exports.postGroupValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateGroupValidationSchema