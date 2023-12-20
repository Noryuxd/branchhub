"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function savePageSettings(formData) {
  mongoose.connect(process.env.MONGODB_URI);
  const session = await getServerSession(authOptions);
  if (session) {
    const dataKeys = [
      "displayName",
      "location",
      "bio",
      "bgType",
      "bgColor",
      "bgImage",
    ];

    const dataToUpdate = {};
    for (const key of dataKeys) {
      if (formData.has(key)) {
        dataToUpdate[key] = formData.get(key);
      }
    }

    await Page.updateOne({ owner: session?.user?.email }, dataToUpdate);
    return true;
  }

  return false;
}
