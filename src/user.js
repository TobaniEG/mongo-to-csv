import mongoose from "mongoose";
import converter from "json-2-csv";

export class UserService {
  // assuming schema
  static schema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
  });

  static model = new mongoose.model("User", UserService.schema);

  static findAll() {
    return UserService.model.find();
  }

  static toCSV(data) {
    return converter.json2csv(data, {
      excelBOM: true,
      keys: [
        { field: "name", title: "Name" },
        { field: "email", title: "Email" },
      ],
    });
  }

  constructor() {}
}
