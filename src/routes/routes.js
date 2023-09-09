import express from "express";

import FormController from "../controller/formController.js";

const app = express.Router();

const formController = new FormController();

app.get("/", (req, res, next) => {
  res.send({
    message: "Server Running on http://localhost:4000",
    success: true,
    data: null,
  });
});

app.post("/new-form-submission", formController.submitFormData);

export default app;
