import React from "react";
import { BarChart, Bar } from "recharts";

const Graph = (props) => {
  const { data } = props;

  const visual = data.map((element) => ({ ["value"]: element }));

  return (
    <BarChart width={500} height={500} data={visual}>
      <Bar isAnimationActive={false} dataKey={"value"} fill="#8884d8" />
    </BarChart>
  );
};

export default Graph;
