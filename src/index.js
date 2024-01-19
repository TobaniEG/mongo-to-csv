import { config } from "dotenv";
config();

import fs from "fs";
import * as db from "./db.js";
import { UserService } from "./user.js";

async function main() {
  // retrieve all user data and marshal to CSV
  const users = await UserService.findAll();
  const csv = UserService.toCSV(users);
  console.log("Writing CSV to file");
  fs.writeFileSync("out.csv", csv, { encoding: "utf-8" });
}

// Connect to mongo instance before running
db.Connect()
  .then(() => main())
  .catch((err) => console.error(err))
  .finally(() => db.Disconnect());
