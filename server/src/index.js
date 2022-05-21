const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/users.routes");
const videoRouter = require("./routes/videos.routes");
require("../db/connect");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(videoRouter);

app.get("/", (req, res) => res.send("Hello Server!"));
app.listen(port, () => console.log(`Server is listening on port ${port}`));
