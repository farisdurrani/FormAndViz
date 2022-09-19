import React, { useState, useId, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { ShortAns } from "./index";
import { OTHER_OPTION } from "../constants";
import PropTypes from "prop-types";

const Radio = (props) => {
  const genId = useId();
  const { entries = ["Yes", "No", "Other:"], setResponse } = props;
  const [otherAns, setOtherAns] = useState();
  const [otherSelected, setOtherSelected] = useState(false);

  const OtherOption = (
    <Row>
      <Col xs={3}>Other:</Col>
      <Col>
        <ShortAns exclude={new Set(entries)} setResponse={setOtherAns} />
      </Col>
    </Row>
  );

  const handleOnChange = (e) => {
    const entrySelected = e.target.id.substring(genId.length);
    if (entrySelected === OTHER_OPTION) {
      setResponse(otherAns);
      setOtherSelected(true);
    } else {
      setResponse(entrySelected);
      setOtherSelected(false);
    }
  };

  if (entries.length !== new Set(entries).size) {
    throw new Error("Duplicate entries to Radio");
  }

  useEffect(() => {
    if (otherSelected) setResponse(otherAns);
  }, [otherAns]);

  return (
    <Form.Group className="form-radio">
      {entries.map((e) => (
        <Form.Check
          key={genId + e}
          type="radio"
          name={genId}
          id={genId + e}
          label={e === OTHER_OPTION ? OtherOption : e}
          onChange={handleOnChange}
        />
      ))}
    </Form.Group>
  );
};

Radio.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.string).isRequired,
  setResponse: PropTypes.func.isRequired,
};

export default Radio;
