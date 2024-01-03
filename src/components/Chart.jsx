"use client";
import {
  LineChart,
  CartesianGrid,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { addDays, differenceInDays, formatISO9075, parseISO } from "date-fns";

const Chart = ({ data }) => {
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
      <LineChart
        width={760}
        height={250}
        data={dataWithoutGaps}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={xLabelKey} stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Chart;
