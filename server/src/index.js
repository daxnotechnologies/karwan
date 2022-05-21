const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/users.routes");
require("./db/config");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(userRouter);

app.get("/", (req, res) => res.send("Hello Server!"));
app.listen(port, () => console.log(`Server is listening on port ${port}`));
