"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function savePageSettings(formData) {
  mongoose.connect(process.env.MONGODB_URI);
  const session = await getServerSession(authOptions);
  if (session) {
    const displayName = formData.get("displayname");
    const location = formData.get("location");
    const bio = formData.get("bio");
    Page.updateOne(
      { owner: session?.user?.email },
      { displayName, location, bio }
    );
    return true;
  }
  return false;
}
