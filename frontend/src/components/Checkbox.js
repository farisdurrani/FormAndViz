import React, { useState, useId, useEffect } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Form from "react-bootstrap/Form";

const Checkbox = (props) => {
  const genId = useId();
  const {
    entries,
    response = new Set(),
    setResponse,
  } = props;

  const handleOnChange = (e) => {
    const entrySelected = e.target.id.substring(genId.length);
    const curSelectections = response;

    if (curSelectections.has(entrySelected)) {
      curSelectections.delete(entrySelected);
    } else {
      curSelectections.add(entrySelected);
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
