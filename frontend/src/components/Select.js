import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const Select = (props) => {
  const { entries, setResponse } = props;

  if (entries.length !== new Set(entries).size) {
    throw new Error("Duplicate entries into Select");
  }

  return (
    <Form.Group>
      <Form.Select
        aria-label="Selection"
        onChange={(e) => console.log(e.target.value)}
      >
        <option value="Choose One">Choose One</option>
        {entries.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

Select.propTypes = {};

export default Select;
