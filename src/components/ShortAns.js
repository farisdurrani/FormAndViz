import React from "react";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ShortAns = (props) => {
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

    setValidated(true);
    setResponse(val);
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

ShortAns.PropTypes = {
  setResponse: PropTypes.func.isRequired,
  exclude: PropTypes.object,
  validateFunction: PropTypes.func,
  validateMsg: PropTypes.string,
  validated: PropTypes.bool,
  setValidated: PropTypes.func,
};

export default ShortAns;
