import React from "react";
import PropTypes from "prop-types";

const FreeAnsRes = (props) => {
  const { responses } = props;
  return (
    <div className="freeAnsRes">
      {responses.map((e, i) => (
        <div className="response p-2 mb-1" key={i}>
          <p className="mt-auto mb-auto">{e}</p>
        </div>
      ))}
    </div>
  );
};

FreeAnsRes.PropTypes = {
  responses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FreeAnsRes;
