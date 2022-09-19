import React from "react";
import PropTypes from "prop-types";

const Spacer = (props) => {
  const { height = 1, width = 1, className } = props;
  return <div className={className} style={{ height: height, width: width }} />;
};

Spacer.propTypes = {};

export default Spacer;
