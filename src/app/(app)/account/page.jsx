import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/page";
import mongoose from "mongoose";
import PageSettingsForm from "@/components/forms/PageSettingsForm";

const AccountPage = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
  if (!session) {
    redirect("/");
  }

  mongoose.connect(process.env.MONGODB_URI);
  const page = await Page.findOne({ owner: session?.user?.email });

  if (page) {
    return <PageSettingsForm page={page} user={session.user} />;
  }

  return (
    <div>
      <UsernameForm desiredUsername={desiredUsername} />
    </div>
  );
};

export default AccountPage;
