import { Event } from "@/models/event";
import mongoose from "mongoose";

export async function POST() {
  mongoose.connect(process.env.MONGODB_URI)
  await Event.create({ type: "click", uri: "" });
  return Response.json(true);
}
