// ----Librarys
const express = require("express");
const { connect, version } = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// ----Middleware
const app = express();

app.use(express.json());
app.use(cors());

// ----Database connectToDB
async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("Ma'lumotlar bazasi ulandi!");
  } catch (error) {
    console.error(
      "Ma'lumotlar bazasiga ulanish muvaffaqiyatsiz — ",
      error.message
    );
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
      description: "Swagger yordamida API hujjatlari",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    tags: [
      { name: "Role", description: "Rol bo‘limi bilan ishlash" },
      { name: "Stuff", description: "Xodimlar bo‘limi bilan ishlash" },
      {
        name: "Stuff_Role",
        description: "Xodimlar roli bo‘limi bilan ishlash",
      },
      { name: "Stage", description: "Bosqich bo‘limi bilan ishlash" },
      { name: "Branch", description: "Filial bo‘limi bilan ishlash" },
      { name: "Group", description: "Guruh bo‘limi bilan ishlash" },
      {
        name: "Group_Stuff",
        description: "Guruh xodimlari bo‘limi bilan ishlash",
      },
      { name: "Lesson", description: "Dars bo‘limi bilan ishlash" },
      { name: "Lid_Status", description: "Lid holati bo‘limi bilan ishlash" },
      { name: "Reason_Lid", description: "Lid sababi bo‘limi bilan ishlash" },
      { name: "Lid", description: "Lid bo‘limi bilan ishlash" },
      { name: "Students", description: "Talabalar bo‘limi bilan ishlash" },
      {
        name: "Student_Group",
        description: "Talaba guruhi bo‘limi bilan ishlash",
      },
      {
        name: "Student_Lesson",
        description: "Talaba darsi bo‘limi bilan ishlash",
      },
      { name: "Payment", description: "To‘lov bo‘limi bilan ishlash" },
    ],
  },
  apis: ["./routers/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ----Routers
const { role } = require("./routers/role.routes"); // ----Role 1
app.use("/role", role);
const { stuff } = require("./routers/stuff.routes"); // ----Stuff 2
app.use("/stuff", stuff);
const { stuff_role } = require("./routers/stuff_role.routes"); // ----Stuff_Role 3
app.use("/stuff_role", stuff_role);
const { stage } = require("./routers/stage.routes"); // ----Stage 4
app.use("/stage", stage);
const { branch } = require("./routers/branch.routes"); // ----Branch 5
app.use("/branch", branch);
const { group } = require("./routers/group.routes"); // ----Group 6
app.use("/group", group);
const { group_stuff } = require("./routers/group_stuff.routes"); // ----Group_Stuff 7
app.use("/group_stuff", group_stuff);
const { lesson } = require("./routers/lesson.routes"); // ----Lesson 8
app.use("/lesson", lesson);
const { lid_status } = require("./routers/lid_status.routes"); // ----Lid_Status 9
app.use("/lid_status", lid_status);
const { reason_lid } = require("./routers/reason_lid.routes"); // ----Reason_Lid 10
app.use("/reason_lid", reason_lid);
const { lid } = require("./routers/lid.routes"); // ----Lid 11
app.use("/lid", lid);
const { students } = require("./routers/students.routes"); // ----Students 12
app.use("/students", students);
const { student_group } = require("./routers/student_group.routes"); // ----Student_Group 13
app.use("/student_group", student_group);
const { student_lesson } = require("./routers/student_lesson.routes"); // ----Student_Lesson 14
app.use("/student_lesson", student_lesson);
const { payment } = require("./routers/payment.routes"); // ----Payment 15
app.use("/payment", payment);

// ----Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishga tushdi`);
});
