const express = require("express");

const app = express();

require("./routes")(app)

app.listen(5000);
