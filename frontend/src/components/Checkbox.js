import React, { useState, useId, useEffect } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const Checkbox = (props) => {
  const genId = useId();
  const { entries, response = [], setResponse } = props;

  const handleOnChange = (e) => {
    const entrySelected = e.target.id.substring(genId.length);
    const curSelectections = response;
    const index = curSelectections.indexOf(entrySelected);

    if (index > -1) {
      curSelectections.splice(index, 1);
    } else {
      curSelectections.push(entrySelected);
    }
    setResponse(curSelectections);
  };

  if (entries.length !== new Set(entries).size) {
    throw new Error("Duplicate entries into Checbox");
  }

  return (
    <Form.Group className="form-checkbox">
      {entries.map((e) => (
        <Form.Check
          key={genId + e}
          type="checkbox"
          name={genId}
          id={genId + e}
          label={e}
          onChange={handleOnChange}
        />
      ))}
    </Form.Group>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
