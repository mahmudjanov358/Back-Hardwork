const { Router } = require("express");
const stage = Router();

const {
  postStage,
  getStage,
  getStageById,
  updateStage,
  deleteStage,
} = require("../controllers/stage.controller");

const {
  postStageValidationSchema,
  updateStageValidationSchema,
} = require("../validations/stageValidation");
const stageValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res
      .status(400)
      .json({ message: validationResult.error.details[0].message });
  } else {
    next();
  }
};

/**
 * @swagger
 * /stage/post:
 *   post:
 *     summary: Create a new stage
 *     tags: [Stage]
 *     description: Create a new stage with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the stage.
 *     responses:
 *       201:
 *         description: Stage created successfully.
 *       500:
 *         description: Internal server error.
*/
stage.post("/post", stageValidation(postStageValidationSchema), postStage);

/**
 * @swagger
 * /stage/get:
 *   get:
 *     summary: Get all stages
 *     tags: [Stage]
 *     description: Retrieve a list of all stages.
 *     responses:
 *       200:
 *         description: A list of stages.
 *       500:
 *         description: Internal server error.
*/
stage.get("/get", getStage);

/**
 * @swagger
 * /stage/getById/{id}:
 *   get:
 *     summary: Get a stage by ID
 *     tags: [Stage]
 *     description: Retrieve a stage by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the stage to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested stage.
 *       404:
 *         description: Stage not found.
 *       500:
 *         description: Internal server error.
*/
stage.get("/getById/:id", getStageById);

/**
 * @swagger
 * /stage/update/{id}:
 *   put:
 *     summary: Update a stage by ID
 *     tags: [Stage]
 *     description: Update the details of a stage by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the stage to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The new name of the stage.
 *     responses:
 *       200:
 *         description: Stage updated successfully.
 *       404:
 *         description: Stage not found.
 *       500:
 *         description: Internal server error.
*/
stage.put(
  "/update/:id",
  stageValidation(updateStageValidationSchema),
  updateStage
);

/**
 * @swagger
 * /stage/delete/{id}:
 *   delete:
 *     summary: Delete a stage by ID
 *     tags: [Stage]
 *     description: Delete a stage by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the stage to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stage deleted successfully.
 *       404:
 *         description: Stage not found.
 *       500:
 *         description: Internal server error.
*/
stage.delete("/delete/:id", deleteStage);

module.exports = { stage };
