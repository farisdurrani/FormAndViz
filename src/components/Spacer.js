import React from "react";
import PropTypes from "prop-types";

const Spacer = (props) => {
  const { height = 1, width = 1, className } = props;
  return <div className={className} style={{ height, width }} />;
};

Spacer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default Spacer;
