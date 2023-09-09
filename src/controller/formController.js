import mongoose from "mongoose";
import formModel from "../models/formModel.js";

class FormController {
  async submitFormData(req, res, next) {
    try {
      console.log(req.body);
      const {
        username,
        email,
        gender,
        userId,
        phoneNumber,
        department,
        address,
      } = req.body;

      //Check if all fields are filled

      if (
        !username ||
        !email ||
        !gender ||
        !userId ||
        !phoneNumber ||
        !department ||
        !address
      ) {
        res.status(400);
        next(new Error("All fields are required"));
      }

      const newUser = new formModel(req.body);

      const result = await newUser.save();

      if (result) {
        res.status(200).send({
          message: "Form submitted successfully",
          success: true,
          data: result,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default FormController;
