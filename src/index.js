const express = require("express");
const app = express();
const pug = require("pug");
const port = 3000;
app.set("views", "src" + "/views");
app.use(express.static("/src/images"));
app.set("view engine", "pug");
const route = require("./routes");

route(app);

app.use(express.static("src"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
