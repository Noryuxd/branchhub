"use server";
import { Page } from "@/models/page";
import mongoose from "mongoose";

const grabUsername = async (formData) => {
  const username = formData.get("username");
  mongoose.connect(process.env.MONGODB_URI);
  const pageDoc = await Page.create({ uri: username });
  return JSON.parse(JSON.stringify(pageDoc));
};

export default grabUsername;
