const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const statusRoute = require("./routes/status");
const yourStatusRoute = require("./routes/yourStatus");
const shopRoute = require("./routes/shop");
const app = express();
dotenv.config();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("connected mongoose");
});
// fix luu anh
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

const port = process.env.PORT;

app.use(cors());
app.use(cookieParser());
// app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/post", postRoute);
app.use("/v1/status", statusRoute);
app.use("/v1/your-status", yourStatusRoute);
app.use("/v1/shop", shopRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
