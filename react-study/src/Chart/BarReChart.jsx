import React, { PureComponent } from "react";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const BarReChart = ({ aiData }) => {
  const data = [
    {
      name: "Normal",
      depth: aiData ? aiData && (aiData["Normal"] * 100).toFixed(1) : 0,
    },
    {
      name: "BOOI",
      depth: aiData ? aiData && (aiData["BOOI"] * 100).toFixed(1) : 0,
    },
    {
      name: "BCI",
      depth: aiData ? aiData && (aiData["BCI"] * 100).toFixed(1) : 0,
    },
    {
      name: "BOOI & BCI",
      depth: aiData ? aiData && (aiData["Both"] * 100).toFixed(1) : 0,
    },
  ];

  return (
    <div style={{ width: "330px", height: "180px" }}>
      <ResponsiveContainer>
        <BarChart
          width={600}
          height={400}
          data={data}
          padding={{
            top: 5,
            right: 5,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="1 3 0 0"
            fill="#212229"
            stroke="#9A9A9A"
          />
          <XAxis dataKey="name" stroke="#FDFDFD" fill="#212229" fontSize={11} />
          <YAxis type="number" domain={[0, 100]} />
          <Bar
            isAnimationActive={false}
            dataKey="depth"
            barSize={30}
            fill="#333F83"
            label={{ position: "top", fill: "#E8E8EB", fontSize: 13 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
