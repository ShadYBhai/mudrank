const express = require("express");
const userRoute = require("./routes/userRoutes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

dotenv.config();

connectDB();

app.use(express.json());
app.use((req, res) => console.log(req.originalUrl));
app.use("/api", userRoute);

app.listen(5000);
