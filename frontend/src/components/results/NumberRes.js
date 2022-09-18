import React from "react";
import PropTypes from "prop-types";
import Plot from "react-plotly.js";

const NumberRes = (props) => {
  const { responses } = props;
  return (
    <div className="numberRes">
      <Plot
        data={[
          {
            x: Array.from({ length: responses.length }, (_, i) => i + 1),
            y: responses,
            name: 'Team A',
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

NumberRes.propTypes = {};

export default NumberRes;
