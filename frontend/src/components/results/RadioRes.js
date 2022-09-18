import React from "react";
import PropTypes from "prop-types";
import Plot from "react-plotly.js";

const RadioRes = (props) => {
  const { responses } = props;
  const countResponses = {};
  const values = [];
  const labels = [];

  for (const res of responses) {
    countResponses[res] = (countResponses[res] || 0) + 1;
  }
  for (const res in countResponses) {
    values.push(countResponses[res] / responses.length);
    labels.push(res);
  }

  return (
    <div className="radioRes">
      <Plot
        data={[
          {
            values: values,
            labels: labels,
            type: "pie",
          },
        ]}
        layout={{ width: "100%" }}
      />
    </div>
  );
};

RadioRes.propTypes = {};

export default RadioRes;
