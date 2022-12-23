const express = require("express");
const userRoute = require("./routes/userRoutes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
var cors = require("cors");

dotenv.config();

connectDB();
app.use(cors());

app.use(express.json());
// app.use((req, res) => console.log(req.originalUrl));
app.use("/api/user", userRoute);

app.listen(5000);
