import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Chart from "@/components/Chart";
import SectionBox from "@/components/layout/SectionBox";
import { Event } from "@/models/event";
import { Page } from "@/models/page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AnalyticsPage = async () => {
  mongoose.connect(process.env.MONGODB_URI);
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  const page = await Page.findOne({ owner: session.user.email });

  const groupedViews = await Event.aggregate(
    [
      {
        $match: {
          type: "view",
          uri: "Noryu",
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              date: "$createdAt",
              format: "%Y-%m-%d",
            },
          },
          count: {
            $count: {},
          },
        },
      },
    ],
    { $order: "-_id" }
  );

  return (
    <div>
      <SectionBox>
        <Chart
          data={groupedViews.map((object) => ({
            date: object._id,
            views: object.count,
          }))}
        />
      </SectionBox>
    </div>
  );
};

export default AnalyticsPage;
