import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Chart from "@/components/Chart";
import SectionBox from "@/components/layout/SectionBox";
import { Event } from "@/models/event";
import { Page } from "@/models/page";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatISO9075, isToday } from "date-fns";
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

  const groupedViews = await Event.aggregate([
    {
      $match: {
        type: "view",
        uri: page.uri,
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
    {
      $sort: { _id: 1 },
    },
  ]);

  const clicks = await Event.find({ page: page.uri, type: "click" });

  return (
    <div>
      <SectionBox>
        <h2 className="text-4xl mb-6 text-center">Views</h2>
        <Chart
          data={groupedViews.map((object) => ({
            date: object._id,
            views: object.count,
          }))}
        />
      </SectionBox>
      <SectionBox>
        <h2 className="text-4xl mb-6 text-center">Clicks</h2>
        {clicks.length === 0 && page.links.length === 0 ? (
          <div className="text-center text-2xl text-violet-800">
            No links data available. <br />
            <span className="text-sm text-center text-gray-400">
              Add some in your settings page
            </span>
          </div>
        ) : (
          page.links.map((link) => (
            <div
              key={link.title}
              className="md:flex gap-6 items-center border-t border-gray-200 py-4"
            >
              <div className=" text-violet-800 pl-4">
                <FontAwesomeIcon icon={faLink} />
              </div>
              <div className="grow">
                <h3 className="font-bold text-xl">
                  {link.title || "No title"}
                </h3>
                <p className="text-gray-500">
                  {link.subtitle || "No description"}
                </p>
                <a className="text-violet-800" target="_blank" href={link.url}>
                  {link.url}
                </a>
              </div>
              <div className="border-2 border-violet-800 p-4 mt-1 md:mt-0">
                <div className="text-center">
                  <div className="text-3xl text-violet-800">
                    {
                      clicks.filter(
                        (click) =>
                          click.uri === link.url && isToday(click.createdAt)
                      ).length
                    }
                  </div>
                  <div className=" uppercase font-bold">Clicks Today</div>
                </div>
              </div>
              <div className="border-2 border-violet-800 p-4 mt-1 md:mt-0">
                <div className="text-center">
                  <div className="text-3xl text-violet-800">
                    {clicks.filter((click) => click.uri === link.url).length}
                  </div>
                  <div className=" uppercase font-bold">Total clicks</div>
                </div>
              </div>
            </div>
          ))
        )}
      </SectionBox>
    </div>
  );
};

export default AnalyticsPage;
