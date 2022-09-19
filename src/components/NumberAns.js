import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

const NumberAns = (props) => {
  const {
    setResponse,
    exclude = new Set(),
    validateFunction,
    validateMsg,
    validated = true,
    setValidated = () => {},
  } = props;

  const handleOnBlur = (e) => {
    const val = e.target.value;

    if (val in exclude) {
      toast.error("Cannot put the same answer as another entry");
      setValidated(false);
      return;
    }

    if (validateFunction && !validateFunction(val)) {
      setValidated(false);
      return;
    }

    if (!isNaN) {
      setValidated(false);
      return;
    }

    setValidated(true);
    setResponse(Number(val));
  };

  return (
    <Form.Group className="form-shortAns mb-3">
      <Form.Control
        type="text"
        placeholder="Short answer here"
        className={`${validated ? null : "invalid-entry"}`}
        onBlur={handleOnBlur}
      />
      {validated ? null : (
        <p className="mt-2 ms-2 validate-error-msg">{validateMsg}</p>
      )}
    </Form.Group>
  );
};

NumberAns.propTypes = {};

export default NumberAns;
