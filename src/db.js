import mongoose from "mongoose";

export async function Connect() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to mongodb");
}

export async function Disconnect() {
  await mongoose.disconnect();
  console.log("Disconnected from mongodb");
}
