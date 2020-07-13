const express = require("express");
const fs = require("fs");

require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/store", (req, res) => {
  fs.readFile("items.json", (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.render("store.ejs", {
        items: JSON.parse(data),
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
