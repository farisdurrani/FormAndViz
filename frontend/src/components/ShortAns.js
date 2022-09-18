import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const ShortAns = (props) => {
  const { setResponse, exclude = new Set() } = props;

  const handleOnBlur = (e) => {
    const val = e.target.value;

    if (val in exclude) {
      throw new Error("Excluded term in ShortAns created");
    }

    setResponse(val);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Control
        type="text"
        placeholder="Short answer here"
        onBlur={handleOnBlur}
      />
    </Form.Group>
  );
};

ShortAns.propTypes = {};

export default ShortAns;
