const express = require('express');
const { connect, version } = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use(express.json());
app.use(cors());

// ----Database connectToDB
async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB is connected!");
  } catch (error) {
    console.error("mongoDB connected failed — ", error.message);
  }
}
connectToDB();

// ----Swagger API Documention
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "API documentation using Swagger",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    tags: [
      { name: "Role", description: "Role bo'limi bilan jarayon" },
      { name: "Stuff", description: " Stuff bo'limi bilan jarayon" },
      { name: "Stuff_Role", description: "Stuff_Role bo'limi bilan jarayon" },
      { name: "Stage", description: "Stage bo'limi bilan jarayon" },
      { name: "Branch", description: "Branch bo'limi bilan jarayon" },
      { name: "Group", description: "Group bo'limi bilan jarayon" },
      { name: "Group_Stuff", description: "Group_Stuff bo'limi bilan jarayon" },
      { name: "Lesson", description: "Lesson bo'limi bilan jarayon" },
      { name: "Lid_Status", description: "Lid_Status bo'limi bilan jarayon" },
      { name: "Reason_Lid", description: "Reason_Lid bo'limi bilan jarayon" },
      { name: "Lid", description: "Lid bo'limi bilan jarayon" },
      { name: "Students", description: "Students bo'limi bilan jarayon" },
      { name: "Student_Group", description: "Student_Group bo'limi bilan jarayon" },
      { name: "Student_Lesson", description: "Student_Lesson bo'limi bilan jarayon" },
      { name: "Payment", description: "Payment bo'limi bilan jarayon" },
    ],
  },
  apis: ['./routers/*.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ----Routers
const { role } = require('./routers/role.routes'); // ----Role 1
app.use('/role', role);
const { stuff } = require('./routers/stuff.routes'); // ----Stuff 2
app.use('/stuff', stuff);
const { stuff_role } = require('./routers/stuff_role.routes'); // ----Stuff_Role 3
app.use('/stuff_role', stuff_role);
const { stage } = require('./routers/stage.routes'); // ----Stage 4
app.use('/stage', stage);
const { branch } = require('./routers/branch.routes'); // ----Branch 5
app.use('/branch', branch);
const { group } = require('./routers/group.routes'); // ----Group 6
app.use('/group', group);
const { group_stuff } = require('./routers/group_stuff.routes'); // ----Group_Stuff 7
app.use('/group_stuff', group_stuff);
const { lesson } = require('./routers/lesson.routes'); // ----Lesson 8
app.use('/lesson', lesson);
const { lid_status } = require('./routers/lid_status.routes'); // ----Lid_Status 9
app.use('/lid_status', lid_status);
const { reason_lid } = require('./routers/reason_lid.routes'); // ----Reason_Lid 10
app.use('/reason_lid', reason_lid);
const { lid } = require('./routers/lid.routes'); // ----Lid 11
app.use('/lid', lid);
const { students } = require('./routers/students.routes'); // ----Students 12
app.use('/students', students);
const { student_group } = require('./routers/student_group.routes'); // ----Student_Group 13
app.use('/student_group', student_group);
const { student_lesson } = require('./routers/student_lesson.routes'); // ----Student_Lesson 14
app.use('/student_lesson', student_lesson);
const { payment } = require('./routers/payment.routes'); // ----Payment 15
app.use('/payment', payment);

// ----Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});