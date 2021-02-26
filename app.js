const express = require("express");
const app = express();

// middleware configurations
require("./configs/middleware.config")(app);

// mongodb
require("./configs/db.config");

const projectRoutes = require("./routes/project.routes");
const taskRoutes = require("./routes/task.routes");

app.use("/projects", projectRoutes);
app.use("/task", taskRoutes);

app.listen(4000, () => console.log("server running"));
