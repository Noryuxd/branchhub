"use client";
import {
  LineChart,
  CartesianGrid,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { addDays, differenceInDays, formatISO9075, parseISO } from "date-fns";

const Chart = ({ data }) => {
  if (!data || data.length === 0) {
    // Handle the case when data is empty
    return (
      <div className="text-center text-2xl text-violet-500">
        No data available for the chart. <br />
        <span className="text-sm text-center text-gray-400">
          Visit your public page atleast once
        </span>
      </div>
    );
  }
  const xLabelKey = Object.keys(data[0]).find((key) => key !== "date");
  const dataWithoutGaps = [];
  data.forEach((value, index) => {
    const date = value.date;
    dataWithoutGaps.push({
      date,
      [xLabelKey]: value[xLabelKey] || 0,
    });
    const nextDate = data?.[index + 1]?.date;
    if (date && nextDate) {
      const daysBetween = differenceInDays(parseISO(nextDate), parseISO(date));
      if (daysBetween > 0) {
        for (let i = 1; i < daysBetween; i++) {
          const dateBetween = formatISO9075(addDays(parseISO(date), i)).split(
            " "
          )[0];
          dataWithoutGaps.push({
            date: dateBetween,
            [xLabelKey]: 0,
          });
        }
      }
    }
  });

  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={760}
          height={250}
          data={dataWithoutGaps}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid horizontal={false} strokeWidth={2} stroke="#f5f5f5" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tick={{ fill: "#aaaa" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tick={{ fill: "#aaaa" }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={xLabelKey}
            stroke="#5b21b6"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
