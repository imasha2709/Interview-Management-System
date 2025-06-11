require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
require("./config/firebase");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://192.168.12.90:5173", "http://localhost:5173"],
    credentials: true,
  })
);

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
