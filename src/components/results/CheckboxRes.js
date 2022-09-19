import React from "react";
import Plot from "react-plotly.js";
import PropTypes from "prop-types";

const CheckboxRes = (props) => {
  const { responses } = props;
  const countResponses = {};

  for (const selectedArray of responses) {
    selectedArray.map((option) => {
      countResponses[option] = (countResponses[option] || 0) + 1;
    });
  }

  const values = [];
  const labels = [];
  for (const res in countResponses) {
    values.push(countResponses[res]);
    labels.push(res);
  }

  return (
    <div className="checkboxRes">
      <Plot
        data={[
          {
            x: values,
            y: labels,
            type: "bar",
            orientation: "h",
          },
        ]}
        layout={{
          width: "100%",
          xaxis: { title: "Number of Responses" },
        }}
      />
    </div>
  );
};

CheckboxRes.propTypes = {
  responses: PropTypes.array.isRequired,
};

export default CheckboxRes;
