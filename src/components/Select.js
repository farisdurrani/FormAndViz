import React, { useId } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const Select = (props) => {
  const { entries, setResponse } = props;
  const genId = useId();

  if (entries.length !== new Set(entries).size) {
    throw new Error("Duplicate entries into Select");
  }

  return (
    <Form.Group className="form-selection">
      <Form.Select
        aria-label="Selection"
        onChange={(e) => setResponse(e.target.value)}
      >
        <option value="Choose One">Choose One</option>
        {entries.map((e) => (
          <option key={genId + e} value={e}>
            {e}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

Select.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.string).isRequired,
  setResponse: PropTypes.func.isRequired,
};

export default Select;
