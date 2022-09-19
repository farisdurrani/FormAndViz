import React from "react";
import Plot from "react-plotly.js";
import PropTypes from "prop-types";

const NumberRes = (props) => {
  const { responses } = props;
  return (
    <div className="numberRes">
      <Plot
        data={[
          {
            x: Array.from({ length: responses.length }, (_, i) => i + 1),
            y: responses,
            name: "Team A",
            mode: "markers",
            type: "scatter",
            marker: { size: 12 },
          },
        ]}
        layout={{
          width: "100%",
          xaxis: { title: "Response #", rangemode: "nonnegative" },
        }}
      />
    </div>
  );
};

NumberRes.PropTypes = {
  responses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default NumberRes;
