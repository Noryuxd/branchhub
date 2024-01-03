import { Event } from "@/models/event";
import mongoose from "mongoose";

export async function POST() {
  mongoose.connect(process.env.MONGODB_URI);
  const url = new URL(req.url);
  const clickedLink = atob(url.searchParams.get("url"));
  await Event.create({ type: "click", uri: clickedLink });
  return Response.json(true);
}
