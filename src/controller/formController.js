import fs from "fs/promises";

import formModel from "../models/formModel.js";
import getDatabaseDirectory from "../helper/getDatabseDirectory.js";

class FormController {
  async submitFormData(req, res, next) {
    try {
      const {
        username,
        email,
        gender,
        userId,
        phoneNumber,
        department,
        address,
      } = req.body;

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

      if (!result) {
        res.status(500);
        next(new Error("Form submission failed"));
      }

      try {
        const databaseDirectory = getDatabaseDirectory(
          "formData",
          "newFormSubmission.json"
        );

        let data = await fs.readFile(databaseDirectory, "utf-8");

        data = JSON.parse(data);
        data.push(result);

        await fs.writeFile(databaseDirectory, JSON.stringify(data), "utf-8");
      } catch (error) {
        console.log(error.message);
      }

      res.status(200).send({
        message: "Form submitted successfully",
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default FormController;
