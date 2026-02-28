"use client";

import { GraphData } from "@/types";
import { FC } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

interface Props {
  data: GraphData;
}

const LineGraph: FC<Props> = ({ data }) => {
  return (
    <Line
      data={data}
      options={{
        plugins: { legend: { display: false } },
        responsive: true,
      }}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default LineGraph;
