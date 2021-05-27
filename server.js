const express = require("express");
const mongoose = require("mongoose");

console.log('Getting online...');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./public/api.js"));
app.use(require('./controllers'));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
