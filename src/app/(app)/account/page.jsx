import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/page";
import mongoose from "mongoose";
import PageSettingsForm from "@/components/forms/PageSettingsForm";
import PageButtonsForm from "@/components/forms/PageButtonsForm";
import PageLinksForm from "@/components/forms/PageLinksForm";
import cloneDeep from "clone-deep";


const AccountPage = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;

  if (!session) {
    redirect("/");
    return null;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const page = await Page.findOne({ owner: session?.user?.email });

    if (!page) {
      return (
        <div className=" mt-56">
          <UsernameForm desiredUsername={desiredUsername} />
        </div>
      );
    }

    const leanPage = cloneDeep(page.toJSON());
    leanPage._id = leanPage._id.toString();

    if (leanPage && Object.keys(leanPage).length > 0) {
      return (
        <>
          <PageSettingsForm page={leanPage} user={session.user} />
          <PageButtonsForm page={leanPage} user={session.user} />
          <PageLinksForm page={leanPage} user={session.user} />
        </>
      );
    } else {
      return (
        <div>
          <p>No data available</p>
        </div>
      );
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return (
      <div>
        <p>Error connecting to the database</p>
      </div>
    );
  }
};

export default AccountPage;
