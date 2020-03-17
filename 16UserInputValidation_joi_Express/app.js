//Install express , body-parser

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const Joi = require("joi");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.post("/", (req, res) => {
  const data = req.body;
  // console.log(data);
  //schema for form validation
   const schema = Joi.object().keys({
    email: Joi.string()
      .trim()
      .email()
      .required(),
    password: Joi.string()
      .min(5)
      .max(10)
      .required()
  });
    Joi.validator(data, schema, (err, result) => {
      if (err) {
        console.log(err);

        res.send("Error");
      } else {
        res.send("Successful");
        console.log(result);
      }
    });
});
app.listen(2004);
