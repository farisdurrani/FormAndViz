import React from "react";
import PropTypes from "prop-types";

const FreeAnsRes = (props) => {
  const { response } = props;
  return (
    <div className="freeAnsRes">
      {response.map((e, i) => (
        <div className="response p-2 mb-1">
          <p className="mt-auto mb-auto" key={i}>{e}</p>
        </div>
      ))}
    </div>
  );
};

FreeAnsRes.propTypes = {};

export default FreeAnsRes;
