const { Router } = require('express');
const branch = Router();

const {
  postBranch,
  getBranch,
  getBranchById,
  updateBranch,
  deleteBranch,
} = require('../controllers/branch.controller');

const {
  postBranchValidationSchema,
  updateBranchValidationSchema,
} = require('../validations/branchValidation');
const branchValidation = (schema) => (req, res, next) => {
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
 * /branch/post:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branch]
 *     description: Create a new branch with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the branch.
 *               address:
 *                 type: string
 *                 description: The address of the branch.
 *               call_number:
 *                 type: string
 *                 description: The call number of the branch.
 *     responses:
 *       201:
 *         description: Branch created successfully.
 *       500:
 *         description: Internal server error.
*/
branch.post('/post', branchValidation(postBranchValidationSchema), postBranch);

/**
 * @swagger
 * /branch/get:
 *   get:
 *     summary: Get all branches
 *     tags: [Branch]
 *     description: Retrieve a list of all branches.
 *     responses:
 *       200:
 *         description: Branches retrieved successfully.
 *       500:
 *         description: Internal server error.
*/
branch.get('/get', getBranch);

/**
 * @swagger
 * /branch/getById/{id}:
 *   get:
 *     summary: Get a branch by ID
 *     tags: [Branch]
 *     description: Retrieve a branch by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: The ID of the branch to retrieve.
 *     responses:
 *       200:
 *         description: Branch found successfully.
 *       404:
 *         description: Branch not found.
 *       500:
 *         description: Internal server error.
*/
branch.get('/getById/:id', getBranchById);

/**
 * @swagger
 * /branch/update/{id}:
 *   put:
 *     summary: Update a branch by ID
 *     tags: [Branch]
 *     description: Update the details of a branch by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the branch to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the branch.
 *               address:
 *                 type: string
 *                 description: The address of the branch.
 *               call_number:
 *                 type: string
 *                 description: The call number of the branch.
 *     responses:
 *       200:
 *         description: Branch updated successfully.
 *       404:
 *         description: Branch not found.
 *       500:
 *         description: Internal server error.
*/
branch.put('/update/:id', branchValidation(updateBranchValidationSchema), updateBranch);

/**
 * @swagger
 * /branch/delete/{id}:
 *   delete:
 *     summary: Delete a branch by ID
 *     tags: [Branch]
 *     description: Delete a branch by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the branch to delete.
 *     responses:
 *       200:
 *         description: Branch deleted successfully.
 *       404:
 *         description: Branch not found.
 *       500:
 *         description: Internal server error.
*/
branch.delete('/delete/:id', deleteBranch);

module.exports = { branch };