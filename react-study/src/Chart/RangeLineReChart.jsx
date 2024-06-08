// https://recharts.org/en-US/examples/SynchronizedLineChart
// https://recharts.org/en-US/api/XAxis
import React, { PureComponent } from "react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: 0,
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 1,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 2,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 3,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 4,
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 5,
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 6,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const RangeLineReChart = () => {
  const [startIndex, setStartIndex] = useState(1000);
  return (
    <>
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            key="pv"
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" type="number" domain={[startIndex, 6]} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            {/* <Brush
              dataKey="date"
              startIndex={startIndex}
              onChange={e => console.log(e)}
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <button
        onClick={() => {
          console.log("1");
          setStartIndex(1);
        }}
      >
        {startIndex}
      </button>
    </>
  );
};
