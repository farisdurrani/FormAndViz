import React, { useState, useEffect, useId } from "react";
import PropTypes from "prop-types";
import {
  Radio,
  Checkbox,
  ShortAns,
  LongAns,
  Range,
  Select,
  Spacer,
} from "./index";

const ResponseBox = (props) => {
  const {
    question,
    type,
    description,
    entries = [],
    response,
    setResponse,
    validateFunction,
    validateMsg,
    setValidated,
    validated,
  } = props;

  const queryMap = {
    radio: <Radio entries={entries} setResponse={setResponse} />,
    checkbox: (
      <Checkbox
        entries={entries}
        response={response}
        setResponse={setResponse}
      />
    ),
    shortAns: (
      <ShortAns
        setResponse={setResponse}
        validateFunction={validateFunction}
        validateMsg={validateMsg}
        setValidated={setValidated}
        validated={validated}
      />
    ),
    longAns: <LongAns setResponse={setResponse} />,
    range: <Range response={response} setResponse={setResponse} />,
    select: <Select entries={entries} setResponse={setResponse} />,
  };

  return (
    <div className="response-box p-4 mt-4">
      <p className="question-title mb-0">{question}</p>
      <p className="question-description">{description}</p>
      <Spacer className="mt-3" />
      {queryMap[type]}
    </div>
  );
};

ResponseBox.propTypes = {};

export default ResponseBox;
