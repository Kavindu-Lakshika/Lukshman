import React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";

const Chart = ({ key_str, uData, xLabels, chart_color }) => {
  return (
    <div className="row mt-2">
      <div className="col-md-12">
        <LineChart
          width={600}
          height={400}
          series={[
            {
              data: uData,
              label: key_str,
              area: true,
              showMark: false,
              color: chart_color,
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              display: "none",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
