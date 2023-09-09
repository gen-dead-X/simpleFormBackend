import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    userId: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    department: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const formModel = mongoose.model("FormData", formSchema);
export default formModel;
